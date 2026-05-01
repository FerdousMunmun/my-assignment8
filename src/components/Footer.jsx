import React from 'react'

const Footer = () => {
  return (
     <footer className="container mx-auto bg-green-200 py-16 px-4 text-white">
      <div className="mx-auto max-w-6xl rounded-xl border border-white/20 px-10 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-blue-950">
              <span className="font-bold text-3xl text-green-800">Skill</span>sphere
            </h2>
            <h3 className="mb-1 text-lg font-bold text-blue-950">Apps Ready Cell phone.</h3>
            <p className="mb-12 text-sm text-blue-950">
              Apps viverra orci sagittis ultrices
            </p>

            <div className="flex gap-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-7"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-7"
              />
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-bold text-blue-950">RESOURCES</h3>
            <ul className="space-y-5 text-sm font-semibold text-blue-950">
              <li>App Store</li>
              <li>Our Courses</li>
              <li>Card Limits</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-bold  text-blue-950">USEFUL LINKS</h3>
            <ul className="space-y-5 text-sm font-semibold text-blue-950">
              <li>Our Careers</li>
              <li>Free Quote</li>
              <li>Career Center</li>
              <li>Help & Support</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-bold  text-blue-950">VISIT</h3>
            <div className="space-y-4 text-sm text-blue-950">
              <p>
                <strong>Address:</strong> 99 Th Qelilnk Street 12 Pekanbaru,
                (CA) 122333
              </p>
              <p>
                <strong>Email:</strong> helloexample@com
              </p>
              <p>
                <strong>Phone:</strong> +(808) 123 4567 8900
              </p>

              <div className="flex gap-3 pt-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs">
                  f
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-400 text-xs">
                  t
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs">
                  ▶
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-500 text-xs">
                  ⚽
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer