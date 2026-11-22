'use client';

import * as React from 'react';
import {
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  Check,
  TrendingUp,
  DollarSign,
  Users,
  Activity,
  Calendar,
  Clock,
  User,
  Home,
  Calculator,
  Bot,
  Send,
  RotateCw,
  Sparkles,
  Award,
  Utensils,
  ArrowRight
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// -------------------------------------------------------------
// 1. 3D Spatial Product Configurator Demo
// -------------------------------------------------------------
export function SpatialConfiguratorDemo() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const [shape, setShape] = React.useState<'sphere' | 'cube' | 'torus' | 'cylinder'>('sphere');
  const [color, setColor] = React.useState('#0066FF');
  const [isWireframe, setIsWireframe] = React.useState(false);
  const [speed, setSpeed] = React.useState(1);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let angleX = 0;
    let angleY = 0;

    const render = () => {
      const width = (canvas.width = canvas.parentElement?.clientWidth || 400);
      const height = (canvas.height = 320);

      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.translate(width / 2, height / 2);

      angleX += 0.01 * speed;
      angleY += 0.015 * speed;

      // Draw wireframe or shaded geometry based on selected shape
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = isWireframe ? 1.5 : 2;

      const size = 70;
      const rings = shape === 'sphere' ? 12 : shape === 'torus' ? 16 : 8;

      for (let i = 0; i < rings; i++) {
        const u = (i / rings) * Math.PI;
        ctx.beginPath();
        for (let j = 0; j <= 24; j++) {
          const v = (j / 24) * Math.PI * 2;
          let x = 0, y = 0, z = 0;

          if (shape === 'sphere') {
            x = size * Math.sin(u) * Math.cos(v);
            y = size * Math.cos(u);
            z = size * Math.sin(u) * Math.sin(v);
          } else if (shape === 'cube') {
            const side = (size * 1.4);
            x = (Math.cos(v) > 0 ? 1 : -1) * (side / 2);
            y = (Math.sin(u) > 0 ? 1 : -1) * (side / 2);
            z = (Math.sin(v) > 0 ? 1 : -1) * (side / 2);
          } else if (shape === 'torus') {
            const R = size * 0.9;
            const r = size * 0.35;
            x = (R + r * Math.cos(u * 2)) * Math.cos(v);
            y = (R + r * Math.cos(u * 2)) * Math.sin(v);
            z = r * Math.sin(u * 2);
          } else {
            // cylinder
            x = size * 0.8 * Math.cos(v);
            y = (i - rings / 2) * 16;
            z = size * 0.8 * Math.sin(v);
          }

          // 3D Rotation
          const x1 = x * Math.cos(angleY) - z * Math.sin(angleY);
          const z1 = z * Math.cos(angleY) + x * Math.sin(angleY);
          const y1 = y * Math.cos(angleX) - z1 * Math.sin(angleX);
          const z2 = z1 * Math.cos(angleX) + y * Math.sin(angleX);

          const scale = 300 / (300 + z2);
          const px = x1 * scale;
          const py = y1 * scale;

          if (j === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [shape, color, isWireframe, speed]);

  const colors = [
    { name: 'Electric Blue', hex: '#0066FF' },
    { name: 'Cyber Violet', hex: '#7C3AED' },
    { name: 'Emerald Neo', hex: '#10B981' },
    { name: 'Amber Gold', hex: '#F59E0B' },
  ];

  return (
    <div className="space-y-4">
      <div className="relative rounded-lg bg-neutral-950 border border-neutral-800 p-2 overflow-hidden flex items-center justify-center">
        <canvas ref={canvasRef} className="w-full h-[320px] block" />
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-900/80 border border-neutral-800 text-[11px] font-mono text-neutral-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          WebGL 60 FPS
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
        <div>
          <label className="block text-neutral-500 font-mono mb-1">Geometry</label>
          <div className="grid grid-cols-2 gap-1">
            {(['sphere', 'cube', 'torus', 'cylinder'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setShape(s)}
                className={`px-2 py-1.5 rounded border capitalize transition-colors ${
                  shape === s
                    ? 'bg-[#0066FF] border-[#0066FF] text-white font-medium'
                    : 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-neutral-500 font-mono mb-1">Color Palette</label>
          <div className="flex items-center gap-1.5 pt-1">
            {colors.map((c) => (
              <button
                key={c.hex}
                onClick={() => setColor(c.hex)}
                style={{ backgroundColor: c.hex }}
                className={`w-7 h-7 rounded-full border-2 transition-transform ${
                  color === c.hex ? 'scale-110 border-white ring-2 ring-blue-500' : 'border-transparent'
                }`}
                title={c.name}
              />
            ))}
          </div>
        </div>

        <div>
          <label className="block text-neutral-500 font-mono mb-1">Render Mode</label>
          <button
            onClick={() => setIsWireframe(!isWireframe)}
            className={`w-full px-3 py-1.5 rounded border font-medium transition-colors ${
              isWireframe
                ? 'bg-neutral-800 border-neutral-700 text-white'
                : 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800'
            }`}
          >
            {isWireframe ? 'Wireframe Mode' : 'Solid Mesh'}
          </button>
        </div>

        <div>
          <label className="block text-neutral-500 font-mono mb-1">Speed ({speed}x)</label>
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.5"
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
            className="w-full mt-2 accent-blue-600"
          />
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 2. Hyper-Fast E-commerce Storefront & Cart Demo
// -------------------------------------------------------------
interface Product {
  id: string;
  name: string;
  category: 'Sneakers' | 'Audio' | 'Watches';
  priceINR: number;
  priceUSD: number;
  rating: number;
  badge?: string;
}

const mockProducts: Product[] = [
  { id: 'p1', name: 'AeroVelocity Nitro Runner', category: 'Sneakers', priceINR: 7499, priceUSD: 89, rating: 4.9, badge: 'Bestseller' },
  { id: 'p2', name: 'SonarCloud Studio ANC Headphones', category: 'Audio', priceINR: 14999, priceUSD: 179, rating: 4.8 },
  { id: 'p3', name: 'Chronos Titanium Stealth Watch', category: 'Watches', priceINR: 19999, priceUSD: 239, rating: 5.0, badge: 'Limited Edition' },
  { id: 'p4', name: 'PulseFit Carbon Track Sneaker', category: 'Sneakers', priceINR: 8999, priceUSD: 109, rating: 4.7 },
];

export function EcommerceCartDemo() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');
  const [cart, setCart] = React.useState<{ product: Product; qty: number }[]>([
    { product: mockProducts[0], qty: 1 }
  ]);
  const [currency, setCurrency] = React.useState<'INR' | 'USD'>('INR');
  const [coupon, setCoupon] = React.useState('');
  const [discountPercent, setDiscountPercent] = React.useState(0);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [checkoutComplete, setCheckoutComplete] = React.useState(false);

  const filtered = selectedCategory === 'All'
    ? mockProducts
    : mockProducts.filter((p) => p.category === selectedCategory);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as { product: Product; qty: number }[]
    );
  };

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === 'DEV20') {
      setDiscountPercent(20);
    } else {
      alert('Try coupon code DEV20 for 20% off!');
    }
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + (currency === 'INR' ? item.product.priceINR : item.product.priceUSD) * item.qty,
    0
  );
  const discount = Math.round((subtotal * discountPercent) / 100);
  const total = subtotal - discount;

  return (
    <div className="space-y-4">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center gap-1.5">
          {['All', 'Sneakers', 'Audio', 'Watches'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-semibold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrency(currency === 'INR' ? 'USD' : 'INR')}
            className="px-2 py-1 rounded border border-neutral-200 dark:border-neutral-800 text-xs font-mono font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            {currency === 'INR' ? '₹ INR' : '$ USD'}
          </button>
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative px-3 py-1.5 rounded-lg bg-[#0066FF] text-white text-xs font-medium flex items-center gap-1.5 shadow-sm"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Cart ({cart.reduce((s, i) => s + i.qty, 0)})</span>
          </button>
        </div>
      </div>

      {/* Product Catalog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-3 bg-neutral-50/50 dark:bg-neutral-900/50 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                  {product.category}
                </span>
                {product.badge && (
                  <Badge variant="electric" className="text-[10px] py-0 px-2">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <h4 className="font-semibold text-sm text-neutral-900 dark:text-white line-clamp-1">
                {product.name}
              </h4>
              <div className="text-xs text-amber-500 mt-0.5">
                {'★'.repeat(Math.floor(product.rating))} <span className="text-neutral-400">({product.rating})</span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-3 pt-2 border-t border-neutral-200/60 dark:border-neutral-800/60">
              <span className="font-mono font-bold text-sm text-neutral-900 dark:text-white">
                {currency === 'INR' ? `₹${product.priceINR.toLocaleString('en-IN')}` : `$${product.priceUSD}`}
              </span>
              <button
                onClick={() => addToCart(product)}
                className="px-2.5 py-1 rounded bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 text-xs font-medium hover:opacity-90 flex items-center gap-1"
              >
                <Plus className="w-3 h-3" />
                Add
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Drawer Modal */}
      {isCartOpen && (
        <div className="p-4 rounded-xl border border-blue-500/30 bg-blue-50/30 dark:bg-blue-950/20 space-y-3">
          <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-2">
            <h4 className="font-semibold text-sm text-neutral-900 dark:text-white flex items-center gap-1.5">
              <ShoppingBag className="w-4 h-4 text-[#0066FF]" />
              Your Interactive Cart Drawer
            </h4>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-xs text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
            >
              Close ✕
            </button>
          </div>

          {cart.length === 0 ? (
            <p className="text-xs text-neutral-500 py-3 text-center">Your cart is empty.</p>
          ) : (
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center justify-between text-xs p-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
                >
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-white">{item.product.name}</p>
                    <p className="text-neutral-500 font-mono">
                      {currency === 'INR'
                        ? `₹${item.product.priceINR.toLocaleString('en-IN')}`
                        : `$${item.product.priceUSD}`}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQty(item.product.id, -1)}
                      className="p-1 rounded bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-mono font-semibold">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.product.id, 1)}
                      className="p-1 rounded bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Coupon Code Input */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Promo Code (Use DEV20)"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="flex-1 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-xs font-mono uppercase"
            />
            <button
              onClick={applyCoupon}
              className="px-3 py-1.5 rounded-lg bg-neutral-800 text-white text-xs font-medium hover:bg-neutral-700"
            >
              Apply
            </button>
          </div>

          {/* Price Calculation Summary */}
          <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 text-xs space-y-1 font-mono">
            <div className="flex justify-between text-neutral-500">
              <span>Subtotal:</span>
              <span>{currency === 'INR' ? `₹${subtotal.toLocaleString('en-IN')}` : `$${subtotal}`}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-emerald-500 font-semibold">
                <span>Discount (20% OFF):</span>
                <span>-{currency === 'INR' ? `₹${discount.toLocaleString('en-IN')}` : `$${discount}`}</span>
              </div>
            )}
            <div className="flex justify-between font-bold text-sm text-neutral-900 dark:text-white pt-1">
              <span>Total Amount:</span>
              <span>{currency === 'INR' ? `₹${total.toLocaleString('en-IN')}` : `$${total}`}</span>
            </div>
          </div>

          {checkoutComplete ? (
            <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500 text-emerald-600 dark:text-emerald-400 text-xs text-center font-medium flex items-center justify-center gap-1.5">
              <Check className="w-4 h-4" />
              Order Simulated Successfully! (Test Checkout)
            </div>
          ) : (
            <Button
              variant="electric"
              size="sm"
              onClick={() => setCheckoutComplete(true)}
              className="w-full text-xs font-semibold py-2"
              disabled={cart.length === 0}
            >
              Simulate Instant Checkout
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// 3. SaaS Metric Intelligence Dashboard Demo
// -------------------------------------------------------------
export function SaasDashboardDemo() {
  const [timeframe, setTimeframe] = React.useState<'7D' | '30D' | '90D' | '1Y'>('30D');

  const dataMap = {
    '7D': { mrr: '₹1,42,000', delta: '+14.2%', users: '1,280', ltv: '₹18,400', points: [20, 35, 45, 40, 60, 55, 75] },
    '30D': { mrr: '₹4,85,000', delta: '+22.8%', users: '4,620', ltv: '₹21,200', points: [15, 25, 30, 45, 50, 65, 80] },
    '90D': { mrr: '₹12,40,000', delta: '+35.1%', users: '11,450', ltv: '₹24,800', points: [10, 20, 35, 55, 60, 75, 95] },
    '1Y': { mrr: '₹42,80,000', delta: '+64.5%', users: '38,900', ltv: '₹28,500', points: [5, 18, 30, 48, 65, 82, 100] },
  };

  const current = dataMap[timeframe];

  return (
    <div className="space-y-4">
      {/* Timeframe Switcher */}
      <div className="flex items-center justify-between pb-2 border-b border-neutral-200 dark:border-neutral-800">
        <span className="text-xs font-mono font-medium text-neutral-500">Live Metric Telemetry</span>
        <div className="flex items-center gap-1 bg-neutral-100 dark:bg-neutral-900 p-1 rounded-lg border border-neutral-200 dark:border-neutral-800">
          {(['7D', '30D', '90D', '1Y'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTimeframe(t)}
              className={`px-2.5 py-1 rounded text-xs font-mono font-medium transition-colors ${
                timeframe === t
                  ? 'bg-white dark:bg-neutral-800 text-[#0066FF] shadow-sm font-bold'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-3 gap-2.5">
        <div className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <p className="text-[11px] text-neutral-500 font-mono">Monthly Revenue</p>
          <p className="text-base sm:text-lg font-bold font-mono text-neutral-900 dark:text-white mt-0.5">
            {current.mrr}
          </p>
          <span className="inline-flex items-center text-[10px] text-emerald-500 font-semibold mt-1">
            <TrendingUp className="w-3 h-3 mr-0.5" /> {current.delta}
          </span>
        </div>

        <div className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <p className="text-[11px] text-neutral-500 font-mono">Active Users</p>
          <p className="text-base sm:text-lg font-bold font-mono text-neutral-900 dark:text-white mt-0.5">
            {current.users}
          </p>
          <span className="inline-flex items-center text-[10px] text-blue-500 font-semibold mt-1">
            <Users className="w-3 h-3 mr-0.5" /> Verified
          </span>
        </div>

        <div className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <p className="text-[11px] text-neutral-500 font-mono">Customer LTV</p>
          <p className="text-base sm:text-lg font-bold font-mono text-neutral-900 dark:text-white mt-0.5">
            {current.ltv}
          </p>
          <span className="inline-flex items-center text-[10px] text-purple-500 font-semibold mt-1">
            <Activity className="w-3 h-3 mr-0.5" /> High Retention
          </span>
        </div>
      </div>

      {/* Interactive Trend Chart */}
      <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50 space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
          <span>Revenue Velocity Graph</span>
          <span className="text-emerald-500 font-semibold">Growth Trend Active</span>
        </div>

        {/* SVG Dynamic Line Chart */}
        <div className="h-32 w-full pt-2">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0066FF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0066FF" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Area Fill */}
            <path
              d={`M 0 100 ${current.points
                .map((pt, idx) => `L ${(idx / (current.points.length - 1)) * 300} ${100 - pt}`)
                .join(' ')} L 300 100 Z`}
              fill="url(#chartGradient)"
            />

            {/* Line */}
            <path
              d={`M 0 ${100 - current.points[0]} ${current.points
                .map((pt, idx) => `L ${(idx / (current.points.length - 1)) * 300} ${100 - pt}`)
                .join(' ')}`}
              fill="none"
              stroke="#0066FF"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Data Points */}
            {current.points.map((pt, idx) => (
              <circle
                key={idx}
                cx={(idx / (current.points.length - 1)) * 300}
                cy={100 - pt}
                r="3.5"
                className="fill-white dark:fill-neutral-900 stroke-[#0066FF] stroke-2 hover:r-5 transition-all cursor-pointer"
              />
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 4. Clinical Triage & Appointment Booking Demo
// -------------------------------------------------------------
export function HealthcareTriageDemo() {
  const [selectedDoctor, setSelectedDoctor] = React.useState('Dr. Ananya Roy');
  const [selectedDate, setSelectedDate] = React.useState('Today');
  const [selectedSlot, setSelectedSlot] = React.useState('02:30 PM');
  const [symptomSeverity, setSymptomSeverity] = React.useState<'Mild' | 'Moderate' | 'Urgent'>('Mild');
  const [booked, setBooked] = React.useState(false);

  const doctors = [
    { name: 'Dr. Ananya Roy', specialty: 'General Physician & Cardiology', exp: '12 Yrs Exp', rating: 4.9 },
    { name: 'Dr. Vikram Seth', specialty: 'Neurology & Diagnostics', exp: '15 Yrs Exp', rating: 5.0 },
  ];

  return (
    <div className="space-y-3 text-xs">
      {/* Doctor Selector */}
      <div>
        <label className="block text-neutral-500 font-mono mb-1.5">Select Medical Specialist</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              onClick={() => setSelectedDoctor(doc.name)}
              className={`p-2.5 rounded-lg border cursor-pointer transition-all ${
                selectedDoctor === doc.name
                  ? 'border-[#0066FF] bg-blue-50/40 dark:bg-blue-950/30'
                  : 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900'
              }`}
            >
              <p className="font-semibold text-neutral-900 dark:text-white">{doc.name}</p>
              <p className="text-neutral-500 text-[11px]">{doc.specialty}</p>
              <span className="text-emerald-500 text-[10px] font-mono mt-1 block">★ {doc.rating} • {doc.exp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Symptom Severity Triage Assessment */}
      <div>
        <label className="block text-neutral-500 font-mono mb-1">Preliminary Triage Urgency</label>
        <div className="flex gap-2">
          {(['Mild', 'Moderate', 'Urgent'] as const).map((sev) => (
            <button
              key={sev}
              onClick={() => setSymptomSeverity(sev)}
              className={`flex-1 py-1.5 rounded-md border text-xs font-medium transition-colors ${
                symptomSeverity === sev
                  ? sev === 'Urgent'
                    ? 'bg-red-500 border-red-500 text-white font-bold'
                    : 'bg-[#0066FF] border-[#0066FF] text-white font-bold'
                  : 'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400'
              }`}
            >
              {sev}
            </button>
          ))}
        </div>
      </div>

      {/* Time Slot Picker */}
      <div>
        <label className="block text-neutral-500 font-mono mb-1">Available Consultation Slots</label>
        <div className="grid grid-cols-4 gap-1.5">
          {['10:00 AM', '11:30 AM', '02:30 PM', '04:15 PM'].map((slot) => (
            <button
              key={slot}
              onClick={() => setSelectedSlot(slot)}
              className={`py-1.5 rounded border text-center font-mono ${
                selectedSlot === slot
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-bold border-transparent'
                  : 'border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300'
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      {booked ? (
        <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500 text-emerald-700 dark:text-emerald-300 space-y-1">
          <p className="font-semibold flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-500" />
            Confirmed: {selectedDoctor}
          </p>
          <p className="text-[11px] text-neutral-600 dark:text-neutral-400">
            Scheduled for {selectedDate} at {selectedSlot}. Triage status: {symptomSeverity}.
          </p>
        </div>
      ) : (
        <Button
          variant="electric"
          size="sm"
          onClick={() => setBooked(true)}
          className="w-full text-xs font-semibold py-2"
        >
          Confirm Medical Consultation
        </Button>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// 5. Luxury Property Showcase & Mortgage Engine Demo
// -------------------------------------------------------------
export function RealEstateMortgageDemo() {
  const [propertyPrice, setPropertyPrice] = React.useState(18500000); // INR 1.85 Cr
  const [downPaymentPercent, setDownPaymentPercent] = React.useState(20);
  const [loanTenureYears, setLoanTenureYears] = React.useState(20);
  const interestRate = 8.5; // 8.5% p.a.

  const loanAmount = propertyPrice * (1 - downPaymentPercent / 100);
  const monthlyRate = interestRate / (12 * 100);
  const months = loanTenureYears * 12;

  const monthlyEMI = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)
  );

  return (
    <div className="space-y-3 text-xs">
      {/* Featured Luxury Property Card */}
      <div className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 flex justify-between items-center">
        <div>
          <Badge variant="purple" className="text-[10px] mb-1">
            Ultra Luxury Penthouse
          </Badge>
          <h4 className="font-bold text-sm text-neutral-900 dark:text-white">
            Skyline Horizon Residence
          </h4>
          <p className="text-neutral-500 text-[11px]">4 BHK • 3,850 Sq.Ft • Private Infinity Pool</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-mono text-neutral-500">Listed Value</p>
          <p className="font-bold text-sm font-mono text-neutral-900 dark:text-white">
            ₹{(propertyPrice / 10000000).toFixed(2)} Cr
          </p>
        </div>
      </div>

      {/* Dynamic Mortgage Controls */}
      <div className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 space-y-2.5">
        <div className="flex items-center justify-between font-mono">
          <span className="text-neutral-500">Down Payment ({downPaymentPercent}%)</span>
          <span className="font-semibold text-neutral-900 dark:text-white">
            ₹{((propertyPrice * downPaymentPercent) / 10000000).toFixed(2)} Lakhs
          </span>
        </div>
        <input
          type="range"
          min="10"
          max="50"
          step="5"
          value={downPaymentPercent}
          onChange={(e) => setDownPaymentPercent(parseInt(e.target.value))}
          className="w-full accent-blue-600"
        />

        <div className="flex items-center justify-between font-mono pt-1">
          <span className="text-neutral-500">Loan Tenure: {loanTenureYears} Years</span>
          <span className="text-neutral-500">Interest: 8.5% p.a.</span>
        </div>
        <div className="flex gap-1.5">
          {[10, 15, 20, 25].map((yr) => (
            <button
              key={yr}
              onClick={() => setLoanTenureYears(yr)}
              className={`flex-1 py-1 rounded border font-mono ${
                loanTenureYears === yr
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-bold'
                  : 'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400'
              }`}
            >
              {yr}Y
            </button>
          ))}
        </div>

        {/* Calculated Monthly EMI Result */}
        <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-blue-50/50 dark:bg-blue-950/20 p-2 rounded-lg">
          <div>
            <p className="text-[10px] text-neutral-500 font-mono">Estimated Monthly EMI</p>
            <p className="font-bold text-base font-mono text-[#0066FF] dark:text-blue-400">
              ₹{monthlyEMI.toLocaleString('en-IN')}/mo
            </p>
          </div>
          <Badge variant="electric" className="text-[10px]">
            Instant Approval Pre-Check
          </Badge>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 6. Enterprise AI Assistant Interface Demo
// -------------------------------------------------------------
export function AiAssistantDemo() {
  const [messages, setMessages] = React.useState<{ role: 'user' | 'assistant'; content: string }[]>([
    {
      role: 'assistant',
      content:
        'Hello! I am your AI Developer & Architecture Assistant. How can I assist you with your web project, API contracts, or cloud deployment today?',
    },
  ]);
  const [input, setInput] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    setMessages((prev) => [...prev, { role: 'user', content: query }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = '';
      if (query.toLowerCase().includes('ecommerce') || query.toLowerCase().includes('store')) {
        reply =
          'For high-conversion e-commerce, I recommend Next.js App Router with Server Components for sub-second product pages, paired with Stripe or Razorpay API and PostgreSQL for transactional integrity.';
      } else if (query.toLowerCase().includes('pricing') || query.toLowerCase().includes('cost')) {
        reply =
          'Niraj offers clear milestone packages: Starter Website (₹18k), Business Website (₹38k), and Full-Stack Web App / SaaS (₹75k+), with zero hidden hosting fees or agency bloat.';
      } else {
        reply =
          'I analyzed your requirement: The optimal stack combines a typed Next.js frontend with Tailwind CSS and a Python FastAPI microservice to ensure high-throughput execution and sub-second load times.';
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="space-y-3 text-xs">
      {/* Chat Messages Log */}
      <div className="h-48 overflow-y-auto space-y-2 p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 font-sans">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-lg p-2.5 leading-relaxed ${
                m.role === 'user'
                  ? 'bg-[#0066FF] text-white rounded-br-none'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 rounded-bl-none border border-neutral-200 dark:border-neutral-800'
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-400 font-mono text-[10px] animate-pulse">
              AI assistant typing response...
            </div>
          </div>
        )}
      </div>

      {/* Starter Prompts */}
      <div className="flex gap-1.5 overflow-x-auto pb-1">
        {['What is the best stack for SaaS?', 'How does pricing work?', 'Tell me about e-commerce'].map((p) => (
          <button
            key={p}
            onClick={() => handleSend(p)}
            className="text-[10px] px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 whitespace-nowrap hover:bg-neutral-200"
          >
            {p}
          </button>
        ))}
      </div>

      {/* Input Field */}
      <div className="flex items-center gap-1.5">
        <input
          type="text"
          placeholder="Ask a technical or project question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-xs"
        />
        <Button variant="electric" size="sm" onClick={() => handleSend()}>
          <Send className="w-3.5 h-3.5" />
        </Button>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 7. Growth Landing Page with A/B Conversion Engine Demo
// -------------------------------------------------------------
export function LandingAbConversionDemo() {
  const [variant, setVariant] = React.useState<'A' | 'B'>('A');
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [count, setCount] = React.useState(1428);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
    setCount((c) => c + 1);
  };

  return (
    <div className="space-y-3 text-xs">
      <div className="flex items-center justify-between pb-2 border-b border-neutral-200 dark:border-neutral-800">
        <span className="text-[11px] font-mono text-neutral-500">Live A/B Conversion Test</span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setVariant('A')}
            className={`px-2 py-0.5 rounded text-[11px] font-mono ${
              variant === 'A' ? 'bg-[#0066FF] text-white font-bold' : 'text-neutral-500'
            }`}
          >
            Variant A (Authority)
          </button>
          <button
            onClick={() => setVariant('B')}
            className={`px-2 py-0.5 rounded text-[11px] font-mono ${
              variant === 'B' ? 'bg-[#0066FF] text-white font-bold' : 'text-neutral-500'
            }`}
          >
            Variant B (Velocity)
          </button>
        </div>
      </div>

      <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-b from-blue-50/20 to-transparent dark:from-blue-950/20 text-center space-y-2">
        <Badge variant="electric" className="text-[10px]">
          {variant === 'A' ? 'Conversion Rate: 7.8%' : 'Conversion Rate: 11.4% (Winner)'}
        </Badge>
        <h3 className="text-base font-bold text-neutral-900 dark:text-white leading-tight">
          {variant === 'A'
            ? 'The Enterprise Data Pipeline That Never Fails.'
            : 'Automate Your Entire Data Workflow in 3 Clicks.'}
        </h3>
        <p className="text-neutral-500 text-[11px] max-w-sm mx-auto">
          {variant === 'A'
            ? 'Join over 1,400+ tech leaders who rely on robust Python pipelines.'
            : 'Save 15+ hours every week with automated CRM sync & intelligent scraping.'}
        </p>

        {submitted ? (
          <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500 text-emerald-600 dark:text-emerald-400 font-semibold text-center">
            Spot #{count} Reserved! Early Access Invitation Sent.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-xs mx-auto pt-2">
            <input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-xs"
            />
            <Button variant="electric" size="sm" type="submit">
              Join Waitlist
            </Button>
          </form>
        )}

        <p className="text-[10px] text-neutral-400 font-mono pt-1">
          🔥 {count.toLocaleString()} founders already joined
        </p>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 8. Gourmet Culinary Menu & Table Reservation Demo
// -------------------------------------------------------------
export function RestaurantReservationDemo() {
  const [dietary, setDietary] = React.useState<'All' | 'Chef Signature' | 'Vegetarian' | 'Gluten-Free'>('All');
  const [guests, setGuests] = React.useState(2);
  const [time, setTime] = React.useState('08:00 PM');
  const [reserved, setReserved] = React.useState(false);

  const dishes = [
    { name: 'Truffle Glazed Wild Mushroom Risotto', tag: 'Chef Signature', price: '₹950', cal: '520 kcal' },
    { name: 'Smoked Burrata with Heirloom Tomato', tag: 'Vegetarian', price: '₹750', cal: '380 kcal' },
    { name: 'Pan-Seared Chilean Sea Bass', tag: 'Gluten-Free', price: '₹1,450', cal: '440 kcal' },
  ];

  const filtered = dietary === 'All' ? dishes : dishes.filter((d) => d.tag === dietary);

  return (
    <div className="space-y-3 text-xs">
      {/* Dietary Filter */}
      <div className="flex gap-1 overflow-x-auto pb-1">
        {(['All', 'Chef Signature', 'Vegetarian', 'Gluten-Free'] as const).map((d) => (
          <button
            key={d}
            onClick={() => setDietary(d)}
            className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
              dietary === d
                ? 'bg-amber-600 text-white font-semibold'
                : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Dishes List */}
      <div className="space-y-1.5">
        {filtered.map((dish) => (
          <div
            key={dish.name}
            className="p-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold text-neutral-900 dark:text-white">{dish.name}</p>
              <span className="text-[10px] text-amber-500 font-mono">{dish.tag} • {dish.cal}</span>
            </div>
            <span className="font-mono font-bold text-neutral-900 dark:text-white">{dish.price}</span>
          </div>
        ))}
      </div>

      {/* Quick Table Booking */}
      <div className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 space-y-2">
        <div className="flex items-center justify-between">
          <span className="font-mono text-neutral-500">Party Size: {guests} Guests</span>
          <div className="flex gap-1">
            {[1, 2, 4, 6].map((g) => (
              <button
                key={g}
                onClick={() => setGuests(g)}
                className={`w-6 h-6 rounded text-xs font-mono font-semibold ${
                  guests === g ? 'bg-amber-600 text-white' : 'bg-neutral-200 dark:bg-neutral-800'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {reserved ? (
          <div className="p-2 rounded bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500 text-emerald-600 dark:text-emerald-400 text-center font-semibold">
            Table reserved for {guests} guests at {time}!
          </div>
        ) : (
          <Button
            size="sm"
            onClick={() => setReserved(true)}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-1.5"
          >
            Reserve Table Now
          </Button>
        )}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 9. Luxury Salon & Spa Sanctuary Booking Demo
// -------------------------------------------------------------
export function LuxurySalonDemo() {
  const [selectedService, setSelectedService] = React.useState('Royal Sculpt & Styling');
  const [selectedStylist, setSelectedStylist] = React.useState('Elena Vance (Master Stylist)');
  const [selectedTime, setSelectedTime] = React.useState('14:30');
  const [confirmed, setConfirmed] = React.useState(false);

  const services = [
    { name: 'Royal Sculpt & Styling', duration: '60 min', price: '$95' },
    { name: 'Beard Artistry & Hot Towel', duration: '45 min', price: '$65' },
    { name: 'Keratin Scalp Rejuvenation', duration: '75 min', price: '$140' },
    { name: 'Botanical Clay Deep Facial', duration: '60 min', price: '$110' },
  ];

  const stylists = [
    'Elena Vance (Master Stylist)',
    'Marcus Thorne (Artistic Director)',
    'Aria Chen (Senior Colorist)'
  ];

  const timeSlots = ['10:00', '11:30', '14:30', '16:00', '17:30'];

  return (
    <div className="space-y-4 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
        <div>
          <span className="text-[10px] text-[#A3F527] uppercase tracking-wider block font-bold">LUMIÈRE SANCTUARY</span>
          <h3 className="text-sm font-bold text-white font-mono uppercase">Luxury Salon & Spa Booking</h3>
        </div>
        <Badge variant="lime">Live Booking API</Badge>
      </div>

      {/* Service Selector */}
      <div className="space-y-1.5">
        <label className="text-[10px] text-neutral-400 uppercase">Select Signature Treatment:</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {services.map((svc) => (
            <button
              key={svc.name}
              onClick={() => setSelectedService(svc.name)}
              className={`p-2.5 text-left border transition-colors ${
                selectedService === svc.name
                  ? 'border-[#A3F527] bg-[#A3F527]/10 text-white'
                  : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white'
              }`}
            >
              <div className="flex justify-between font-bold">
                <span>{svc.name}</span>
                <span className="text-[#A3F527]">{svc.price}</span>
              </div>
              <span className="text-[10px] text-neutral-500">{svc.duration}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Stylist Selector */}
      <div className="space-y-1.5">
        <label className="text-[10px] text-neutral-400 uppercase">Choose Lead Specialist:</label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {stylists.map((st) => (
            <button
              key={st}
              onClick={() => setSelectedStylist(st)}
              className={`p-2 text-left border text-[11px] truncate transition-colors ${
                selectedStylist === st
                  ? 'border-[#A3F527] bg-[#A3F527]/10 text-white'
                  : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Time Slot Selector */}
      <div className="space-y-1.5">
        <label className="text-[10px] text-neutral-400 uppercase">Available Time Slots (Today):</label>
        <div className="flex flex-wrap gap-2">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              onClick={() => setSelectedTime(slot)}
              className={`px-3 py-1.5 border text-[11px] font-bold ${
                selectedTime === slot
                  ? 'border-[#A3F527] bg-[#A3F527] text-black'
                  : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-700'
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      {/* Confirmation Area */}
      <div className="pt-2 border-t border-neutral-800">
        {confirmed ? (
          <div className="p-3 border border-[#A3F527] bg-[#A3F527]/10 text-white space-y-1">
            <p className="font-bold text-[#A3F527] flex items-center gap-1.5">
              <span>✓ Appointment Confirmed</span>
            </p>
            <p className="text-[11px] text-neutral-300">
              Reserved {selectedService} with {selectedStylist} at {selectedTime}. Confirmation token #LUM-8824.
            </p>
            <button
              onClick={() => setConfirmed(false)}
              className="text-[10px] text-neutral-400 underline mt-1 block"
            >
              Book another appointment
            </button>
          </div>
        ) : (
          <Button
            variant="lime"
            size="sm"
            onClick={() => setConfirmed(true)}
            className="w-full text-xs font-bold py-2.5"
          >
            Confirm Luxury Reservation
          </Button>
        )}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 10. Minimalist Creative Developer Portfolio Demo
// -------------------------------------------------------------
export function DeveloperPortfolioDemo() {
  const [terminalInput, setTerminalInput] = React.useState('');
  const [terminalHistory, setTerminalHistory] = React.useState<string[]>([
    'NIRAJ.DEV [Version 2.4.0]',
    'Type "help" to inspect commands or "skills" to view benchmarks.',
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    let reply = '';
    if (cmd === 'help') {
      reply = 'Available commands: bio, skills, stack, services, deploy, contact, clear';
    } else if (cmd === 'bio') {
      reply = 'Niraj Charpe — Full-Stack Developer & Python Automation Specialist. Worldwide remote.';
    } else if (cmd === 'skills') {
      reply = 'Next.js 14, TypeScript, Python 3.12, FastAPI, WebGL Three.js, pgvector, Vercel Edge CI/CD.';
    } else if (cmd === 'services') {
      reply = '1. Website Development (20 Examples) | 2. Custom AI Tools (RAG/Agents) | 3. Business Automation';
    } else if (cmd === 'deploy') {
      reply = 'Git push -> Vercel edge build -> Sub-second global rollout across 18 edge regions.';
    } else if (cmd === 'contact') {
      reply = 'Direct email: nirajcharpe48@gmail.com | GitHub: github.com/niraj7780';
    } else if (cmd === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    } else {
      reply = `Unknown command "${cmd}". Type "help" for available commands.`;
    }

    setTerminalHistory((prev) => [...prev, `$ ${terminalInput}`, reply]);
    setTerminalInput('');
  };

  return (
    <div className="space-y-3 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
        <span className="text-white font-bold uppercase tracking-wider">DEV // TERMINAL WORKBENCH</span>
        <Badge variant="lime">CLI Interactive Mode</Badge>
      </div>

      <div className="p-3 border border-neutral-800 bg-black min-h-[180px] max-h-[220px] overflow-y-auto space-y-1 text-neutral-300">
        {terminalHistory.map((line, i) => (
          <p key={i} className={line.startsWith('$') ? 'text-[#A3F527] font-bold' : ''}>
            {line}
          </p>
        ))}
      </div>

      <form onSubmit={handleCommand} className="flex gap-2">
        <span className="p-2 border border-neutral-800 bg-neutral-950 text-[#A3F527] font-bold">$</span>
        <input
          type="text"
          value={terminalInput}
          onChange={(e) => setTerminalInput(e.target.value)}
          placeholder="Type 'bio', 'services', 'skills', or 'help'..."
          className="flex-1 px-3 py-2 border border-neutral-800 bg-neutral-950 text-white text-xs font-mono focus:outline-none focus:border-[#A3F527]"
        />
        <Button variant="lime" size="sm" type="submit">
          Exec
        </Button>
      </form>
    </div>
  );
}

// -------------------------------------------------------------
// 11. Fintech Wealth & Asset Management Demo
// -------------------------------------------------------------
export function FintechWealthDemo() {
  const [swapAmount, setSwapAmount] = React.useState('1.5');
  const [swapped, setSwapped] = React.useState(false);
  const ethRate = 3450.25;
  const usdValue = (parseFloat(swapAmount || '0') * ethRate).toFixed(2);

  return (
    <div className="space-y-4 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
        <div>
          <span className="text-[10px] text-[#A3F527] uppercase tracking-wider block font-bold">APEX CAPITAL</span>
          <h3 className="text-sm font-bold text-white uppercase">Wealth Management Terminal</h3>
        </div>
        <Badge variant="lime">Live FX Feeds</Badge>
      </div>

      {/* Portfolio Balance Header */}
      <div className="p-4 border border-neutral-800 bg-black space-y-1">
        <span className="text-[10px] text-neutral-500 uppercase">Total Liquidity Pool</span>
        <p className="text-2xl font-black font-mono text-white">$482,910.42 <span className="text-xs text-[#A3F527] font-bold">+4.8% 24h</span></p>
        <div className="grid grid-cols-3 gap-2 pt-2 text-[10px] text-neutral-400">
          <div>BTC: 45.2%</div>
          <div>ETH: 32.8%</div>
          <div>USDT/USD: 22.0%</div>
        </div>
      </div>

      {/* Simulated Quick Swap */}
      <div className="p-3 border border-neutral-800 bg-neutral-950 space-y-2">
        <label className="text-[10px] text-neutral-400 uppercase">Instant Currency Swap Simulator:</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            step="0.1"
            value={swapAmount}
            onChange={(e) => setSwapAmount(e.target.value)}
            className="w-24 px-2 py-1.5 border border-neutral-800 bg-black text-white font-mono text-xs"
          />
          <span className="text-neutral-400">ETH ≈</span>
          <span className="text-[#A3F527] font-bold text-sm">${usdValue} USD</span>
        </div>
        <Button
          variant="lime"
          size="sm"
          onClick={() => {
            setSwapped(true);
            setTimeout(() => setSwapped(false), 3000);
          }}
          className="w-full text-xs"
        >
          {swapped ? 'Swap Executed on Edge ✓' : 'Simulate Asset Rebalance'}
        </Button>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 12. Boutique Hotel & Resort Booking Demo
// -------------------------------------------------------------
export function HotelBookingDemo() {
  const [selectedSuite, setSelectedSuite] = React.useState('Oceanfront Cliff Villa');
  const [nights, setNights] = React.useState(3);
  const [booked, setBooked] = React.useState(false);

  const suites = [
    { name: 'Oceanfront Cliff Villa', rate: 450 },
    { name: 'Alpine Forest Chalet', rate: 380 },
    { name: 'Presidential Royal Suite', rate: 750 },
  ];

  const current = suites.find((s) => s.name === selectedSuite) || suites[0];
  const total = current.rate * nights;

  return (
    <div className="space-y-4 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
        <div>
          <span className="text-[10px] text-[#A3F527] uppercase tracking-wider block font-bold">AURA RESIDENCES</span>
          <h3 className="text-sm font-bold text-white uppercase">Resort & Villa Booking Engine</h3>
        </div>
        <Badge variant="lime">Global PMS</Badge>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] text-neutral-400 uppercase">Choose Residence:</label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {suites.map((s) => (
            <button
              key={s.name}
              onClick={() => setSelectedSuite(s.name)}
              className={`p-2.5 text-left border ${
                selectedSuite === s.name
                  ? 'border-[#A3F527] bg-[#A3F527]/10 text-white'
                  : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white'
              }`}
            >
              <div className="font-bold">{s.name}</div>
              <div className="text-[#A3F527] text-[11px]">${s.rate}/night</div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between p-3 border border-neutral-800 bg-black">
        <div>
          <span className="text-neutral-500 text-[10px] block uppercase">Stay Duration:</span>
          <div className="flex items-center gap-2 mt-1">
            <button onClick={() => setNights(Math.max(1, nights - 1))} className="px-2 py-0.5 border border-neutral-700">-</button>
            <span className="font-bold text-white">{nights} Nights</span>
            <button onClick={() => setNights(nights + 1)} className="px-2 py-0.5 border border-neutral-700">+</button>
          </div>
        </div>
        <div className="text-right">
          <span className="text-neutral-500 text-[10px] block uppercase">Estimated Stay Total:</span>
          <span className="text-xl font-bold font-mono text-[#A3F527]">${total}</span>
        </div>
      </div>

      {booked ? (
        <div className="p-3 border border-[#A3F527] bg-[#A3F527]/10 text-[#A3F527] font-bold text-center">
          ✓ Booking Hold Reserved for {nights} nights at {selectedSuite}!
        </div>
      ) : (
        <Button variant="lime" size="sm" onClick={() => setBooked(true)} className="w-full">
          Reserve Luxury Suite
        </Button>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// Concept Demo Container with Modal & Switcher
// -------------------------------------------------------------
export function InteractiveDemoViewer({ demoId }: { demoId: string }) {
  switch (demoId) {
    case '3d-configurator':
    case '3d-interactive':
      return <SpatialConfiguratorDemo />;
    case 'ecommerce-cart':
    case 'ecommerce-store':
      return <EcommerceCartDemo />;
    case 'saas-analytics':
    case 'saas-platform':
      return <SaasDashboardDemo />;
    case 'healthcare-portal':
      return <HealthcareTriageDemo />;
    case 'real-estate-showcase':
      return <RealEstateMortgageDemo />;
    case 'ai-assistant-interface':
      return <AiAssistantDemo />;
    case 'high-converting-landing':
      return <LandingAbConversionDemo />;
    case 'restaurant-experience':
      return <RestaurantReservationDemo />;
    case 'luxury-salon':
      return <LuxurySalonDemo />;
    case 'developer-portfolio':
      return <DeveloperPortfolioDemo />;
    case 'fintech-wealth':
      return <FintechWealthDemo />;
    case 'hotel-booking':
    case 'hotel-booking-resort':
      return <HotelBookingDemo />;
    default:
      return <SpatialConfiguratorDemo />;
  }
}
