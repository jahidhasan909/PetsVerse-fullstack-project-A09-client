import { DotSpinner } from 'ldrs/react'
import 'ldrs/react/DotSpinner.css'
export default function Loading() {

    return (
        <div className='flex min-h-screen justify-center items-center'>

            <DotSpinner

                size="40"
                speed="0.9"
                color="black"
            />
        </div>
    )
}


