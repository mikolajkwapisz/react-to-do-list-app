// interface apiRequestProps {
//     url: string,
//     options?: object | undefined ,
//     errMsg?: string | null | unknown
// }

// export default async function apiRequest( url = '', options = undefined, errMsg = null ): Promise<apiRequestProps> {
//     try {
//         const response = await fetch(url, options)
//         if(!response.ok) throw new Error('Please reload the app')
//     } catch (error) {
//         errMsg = error;
//     }finally{
//         return errMsg
//     }
// }

export {}
