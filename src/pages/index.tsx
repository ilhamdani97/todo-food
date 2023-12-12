import Image from 'next/image'
import { Inter } from 'next/font/google'
import { store } from '@/redux/store'
import { useDispatch, useSelector } from 'react-redux';
import { 
  addReceipe, 
  addProcedures, 
  valueProcedures, 
  valueReceipe, 
  deleteReceipe,
  editValueRecipe,
  handleInputValueReceived
} from '@/redux/reducer/ingredience';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from 'react';
addReceipe
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const stores = store.getState();
  const ingredience = useSelector((state) => state.ingredience);
  const dispatch = useDispatch();
  
  const handleChangeProcedures = (e: { target: { value: any; }; }) => {
    dispatch(valueProcedures(e.target.value));
  };

  const handleChangeValueReceive = (e: { target: { value: any; }; }) => {
    dispatch(handleInputValueReceived(e.target.value));
  };

  const handleAddProcedures = (e: { key: string; }) => {
    if (e.key === "Enter") {
      dispatch(addProcedures());
    }
  };

  const handleChangeReceipe = (e: { target: { value: any; }; }) => {
    dispatch(valueReceipe(e.target.value));
  };

  const handleAddReceipe = (e: { key: string; }) => {
    if (e.key === "Enter") {
      dispatch(addReceipe());
    }
  };

  const handleDeleteReceipe = (index: number) => {
    dispatch(deleteReceipe(index))
  }

  const handleEditValueReceipe = (index: number) => {
    dispatch(editValueRecipe(index))
  }
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div>
          <h2 className={`mb-4 text-2xl font-semibold`}>
            Bahan - Bahan
          </h2>
          {ingredience.listDefault && ingredience.listDefault.map((data: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined, index: Key | null | undefined) => (
            <div key={index} className="fixed left-0 top-0 flex w-full mb-2 justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              {data}
            </div>
          ))}
          
        </div>
        
        <div className='w-[1/2]'>
          
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder="Nama Resep . . . "
            onChange={handleChangeReceipe}
            onKeyDown={handleAddReceipe}
          />
          <h4 className={`mb-2 mt-4 text-xl font-semibold`}>
            Bahan:
          </h4>
          
          {ingredience.listRecipe.length ? ingredience.listRecipe.map((data: { value: null; receipe: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }, index: Key | null | undefined) => (
            <div key={index} className='flex row w-full'>
              {data.value === null && (
                <input
                  className="shadow appearance-none border rounded w-10 py-2 mr-2 px-2 h-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  placeholder=""
                  onChange={handleChangeValueReceive}
                  onBlur={() => handleEditValueReceipe(index)}
                />
              )}
              
              <div className="fixed  left-0 top-0 flex w-full mb-2 justify-between border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-4 pt-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                <code className="font-mono font-bold">{data.value?? ''} { data.receipe}</code>
                <svg className="h-4 w-4 ml-2 cursor-pointer text-white-500"  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>
                <svg className="h-4 w-4 ml-2 cursor-pointer text-white-500" onClick={() => handleDeleteReceipe(index)}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
              </div>
            </div>
          )) :(
            <div className="fixed left-0 top-0 flex w-full mb-2 justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Mohon Isi terlebih dahulu Bahan Bahan.
            </div>
          )}
          
          
          <h4 className={`mb-2 mt-4 text-xl font-semibold`}>
            Tata Cara:
          </h4>
          {ingredience.listProcedures.length ? ingredience.listProcedures.map((data: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined, index: Key | null | undefined) => (
            <div key={index} className="fixed left-0 top-0 flex w-full mb-2 border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              {`${index + 1} ${data}`}
            </div>
          )) : (
            <div className="fixed left-0 top-0 flex w-full mb-2 justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Mohon Isi terlebih dahulu tata cara.
            </div>
          )}
          
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder="Tata Cara"
            onChange={handleChangeProcedures}
            onKeyDown={handleAddProcedures}
          />
        </div> 
      </div>
    </main>
  )
}
