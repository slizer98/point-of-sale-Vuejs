import { generateClasses } from '@formkit/themes'

const config = {
    config: {
        classes: generateClasses({
            global: {
                label: 'block mb-1 font-bold text-lg text-gray-700',
                message: 'text-red-500 text-sm mb-4',
                input: 'mb-5 w-full p-3 border-gray-300 text-gray-700 placeholder-gray-40'
            },
            file: {
                noFiles: 'block my-2',
                fileItem: 'hidden'
            },
            submit: {
                input: '$reset bg-green-400 hover:bg-green-500 w-full p-2 uppercase rounded text-gray-700 font-bold disabled:opacity-50'
            }
        })
    }
}

export default config