import React, { useEffect, useState } from 'react'

function Dummycomp(){
    const [data, setData] = useState([])
    const [status, setStatus] = useState('you are online')

    useEffect(()=>{
        let url = 'https://jsonplaceholder.typicode.com/users'

        fetch(url).then((resp)=> resp.json()).then((res)=> {
            setData(res)
            localStorage.setItem('users',JSON.stringify(res))
        }).catch(err=>{
            let collectedData = localStorage.getItem('users')
            setData(JSON.parse(collectedData))
            setStatus('you are offline')
            console.log(err)
        } )
    },[])
    
    return (
        <div>

        <h1>Dummy component ==== {status} </h1>
       

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Id
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Address
                </th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((item)=> 

                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.id}
                </th>
                <td class="px-6 py-4">
                    {item.name}
                </td>
                <td class="px-6 py-4">
                    {item.email}
                </td>
                <td class="px-6 py-4">
                    {item.address.street}
                </td>
            </tr>
                )
            }
            
            
        </tbody>
    </table>
</div>

    </div>
    )
}
export default Dummycomp
