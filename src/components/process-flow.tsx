import { ArrowRight } from "lucide-react"

export default function ProcessFlow() {
  const steps = [
    {
      title: "Order & Schedule",
      description: "Choose your delivery preferences and schedule a convenient time",
      icon: "📦",
    },
    {
      title: "Secure Delivery",
      description: "Courier places package in your smart locker",
      icon: "🔒",
    },
    {
      title: "Notification",
      description: "Receive instant notification when your package arrives",
      icon: "📱",
    },
    {
      title: "Collect Anytime",
      description: "Use the app to unlock and collect at your convenience",
      icon: "✅",
    },
  ]

  return (
    <div className="w-full py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-4 relative">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center z-10 w-full md:w-1/4">
            <div className="w-20 h-20 rounded-full bg-cyan-950 border-2 border-cyan-400 flex items-center justify-center text-4xl mb-4">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">{step.title}</h3>
            <p className="text-gray-200 text-sm">{step.description}</p>

            {/* Don't show arrow after the last step */}
            {index < steps.length - 1 && (
              <div
                className="hidden md:flex absolute left-0 right-0 top-10 items-center justify-center"
                style={{ left: `${index * 25 + 18.75}%`, width: "12.5%" }}
              >
                <ArrowRight className="w-8 h-8 text-cyan-400" />
              </div>
            )}

            {/* Mobile arrow (down) */}
            {index < steps.length - 1 && (
              <div className="flex md:hidden mt-4 mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            )}
          </div>
        ))}

        {/* Connecting line for desktop */}
        <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-cyan-800 z-0" />
      </div>
    </div>
  )
}
