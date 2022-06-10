import React from 'react'

function Footer() {
    return (
        <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-6">
            {/* <div className="group relative">Footer</div> */}

            <div className="ml-28">
                <div className="text-left">Contact Information</div>
                <div className="flex">
                    <div className="text-left">
                        <ul>
                            <li>Name</li>
                            <li>Number</li>
                            <li>Email</li>
                        </ul>
                    </div>
                    <div className="text-right">
                        <ul>
                            <li>Thearon</li>
                            <li>888-888-8888</li>
                            <li>theron@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="group relative">
                <div className="group relative">
                    <div>Send a message</div>
                    <form>
                        <input placeholder="First Name..."></input>
                        <input placeholder="Last Name..."></input>
                        <input placeholder="Email..."></input>
                        <input placeholder="Phone..."></input>
                        <input placeholder="Address..."></input>
                        <input placeholder="Subject..."></input>
                        <input placeholder="Message..."></input>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Footer

