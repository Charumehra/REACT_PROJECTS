import { X } from "lucide-react"

function RecordModel() {
  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50 ">
        <div className="bg-white rounded-lg shadow-2xl max-w-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">Register New Record
                </h2>
                <button className="text-gray-400 hover:text-gray-600 transition-all">
                    <X size={24}/>
                </button>
            </div>
            {/* Form content goes here */}
            <div className="p-6 space-y-4">
                {/* Name */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Name*
                    </label>
                    <input type="text"
                    placeholder="Enter Full Name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 Focus:ring-blue-500"/>
                </div>
                {/* Email */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email*
                    </label>
                    <input type="email"
                    placeholder="Enter email address" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 Focus:ring-blue-500"/>
                </div>
                {/* Phone */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone*
                    </label>
                    <input type="tel"
                    placeholder="Enter Phone Number" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 Focus:ring-blue-500"/>
                </div>
                {/* Position */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone*
                    </label>
                    <input type="text"
                    placeholder="Enter Position" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 Focus:ring-blue-500"/>
                </div>
            </div>
            {/* Footer Buttons */}
            <div className="flex gap-3 p-6 border-t border-gray-200">
                <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-300 rounded-lg hover-bg-gray-50 transition-all font-medium">Cancel</button>
                <button className="flex-1 px-4 py-2 border
                bg-blue-600 text-white border-gray-300 rounded-lg  transition-all font-medium">Register</button>
            </div>
        </div>
    </div>
  )
}

export default RecordModel