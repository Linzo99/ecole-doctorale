export default ({ item }) => {
    const { telephone, prenoms, email, diplome, mention } = item
    return(
        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
            <td class="p-4 w-4">
                <div class="flex items-center">
                    <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="checkbox-table-1"
                        class="sr-only">checkbox</label>
                </div>
            </td>
            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                { telephone }
            </td>
            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                { prenoms }
            </td>
            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                { email  }
            </td>
            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                { diplome }
            </td>
            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                { mention }
            </td>
            <td class="py-4 px-6 text-sm space-x-3 font-medium text-right whitespace-nowrap">
                <a href="#" class="text-blue-600 hover:underline">ACCEPTER</a>
                <a href="#" class="text-red-600 hover:underline">REJETER</a>
            </td>
        </tr>
    )
}