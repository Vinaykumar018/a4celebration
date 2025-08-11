export function YellowLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-md">
      <div className="relative flex flex-col items-center">
        {/* Floating orb with gradient and shine */}
        <div className="relative w-24 h-24 mb-6">
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-lg animate-pulse"></div>
          
          {/* Main orb with gradient */}
          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-lg overflow-hidden">
            {/* Shine effect */}
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-white/30 rounded-full filter blur-xs"></div>
            
            {/* Inner rings (3D effect) */}
            <div className="absolute inset-2 rounded-full border-2 border-yellow-200/50"></div>
            <div className="absolute inset-4 rounded-full border border-yellow-100/30"></div>
            
            {/* Animated center */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-100 rounded-full shadow-inner">
              <div className="absolute inset-0 rounded-full bg-yellow-300 animate-ping opacity-30"></div>
            </div>
          </div>
          
          {/* Floating particles */}
          {[...Array(4)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-float"
              style={{
                top: `${Math.random() * 60 + 20}%`,
                left: `${Math.random() * 60 + 20}%`,
                animationDelay: `${i * 0.3}s`,
                filter: 'blur(0.5px)'
              }}
            ></div>
          ))}
        </div>
        
        {/* Loading text with animated dots */}
        <div className="text-yellow-600 font-medium tracking-wider flex items-center">
          Loading
          <span className="flex ml-1 space-x-1">
            {[...Array(3)].map((_, i) => (
              <span 
                key={i} 
                className="inline-block w-2 h-2 bg-yellow-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              ></span>
            ))}
          </span>
        </div>
      </div>
      
      {/* Add this to your global CSS or style tag */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(5px); }
        }
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}