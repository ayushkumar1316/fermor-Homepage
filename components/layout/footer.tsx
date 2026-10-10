export function Footer() {
  return (
    <footer className="bg-navy text-white py-16 lg:py-24 mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm opacity-75">
              <li><a href="#">Stocks</a></li>
              <li><a href="#">Mutual Funds</a></li>
              <li><a href="#">ETFs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm opacity-75">
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm opacity-75">
              <li><a href="#">Calculators</a></li>
              <li><a href="#">Learning</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm opacity-75">
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row justify-between items-center text-sm opacity-60">
          <p>© 2026 Fermor. All rights reserved.</p>
          <p>Investments are subject to market risks.</p>
        </div>
      </div>
    </footer>
  );
}
