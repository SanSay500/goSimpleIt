// import React from 'react'
// import { InertiaLink, usePage } from '@inertiajs/inertia-react'
// console.log('privet1')
// console.log('privet2')

// const Index = () => {
//   console.log(orders)
//   const { orders } = usePage().props
//   console.log('privet4')
//   // const { data } = orders;

//   return (
//         <div>
//             <div className="container mx-auto">
//                 <h1 className="mb-8 text-3xl font-bold text-center">Order</h1>
//                 <div className="flex items-center justify-between mb-6">
//                     <InertiaLink
//                         className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
//                         href={route('orders.create')}
//                     >
//                         Create Order
//                     </InertiaLink>
//                 </div>

//                 <div className="overflow-x-auto bg-white rounded shadow">
//                     <table className="w-full whitespace-nowrap">
//                         <thead className="text-white bg-gray-600">
//                         <tr className="font-bold text-left">
//                             <th className="px-6 pt-5 pb-4">#</th>
//                             <th className="px-6 pt-5 pb-4">Title</th>
//                             <th className="px-6 pt-5 pb-4">Description</th>
//                             <th className="px-6 pt-5 pb-4">Action</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {data.map(({ id, title, description }) => (
//                             <tr key={id} className="">
//                                 <td className="border-t">
//                                     <InertiaLink
//                                         href={route('orders.edit', id)}
//                                         className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
//                                     >
//                                         {id}
//                                     </InertiaLink>
//                                 </td>
//                                 <td className="border-t">
//                                     <InertiaLink
//                                         href={route('orders.edit', id)}
//                                         className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
//                                     >
//                                         {title}
//                                     </InertiaLink>
//                                 </td>
//                                 <td className="border-t">
//                                     <InertiaLink
//                                         tabIndex="1"
//                                         className="flex items-center px-6 py-4"
//                                         href={route('orders.edit', id)}
//                                     >
//                                         {description}
//                                     </InertiaLink>
//                                 </td>
//                                 <td className="border-t">
//                                     <InertiaLink
//                                         tabIndex="1"
//                                         className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
//                                         href={route('orders.edit', id)}
//                                     >
//                                         Edit
//                                     </InertiaLink>
//                                 </td>
//                             </tr>
//                         ))}
//                         {data.length === 0 && (
//                             <tr>
//                                 <td
//                                     className="px-6 py-4 border-t"
//                                     colSpan="4"
//                                 >
//                                     No contacts found.
//                                 </td>
//                             </tr>
//                         )}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//   )
// }

// export default Index