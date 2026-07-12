'use client';

export default function BackgroundVideo() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <div
        className="absolute inset-0 w-full h-full bg-top opacity-[0.04] bg-repeat-y mix-blend-lighten scale-[1.02]"
        style={{
          backgroundImage: "url('/Linkedin.png')",
          backgroundSize: '100% auto',
        }}
      />
      {/* Vignette and blend overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-[#08080a]/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,8,10,0.1)_0%,#08080a_85%)]" />
    </div>
  );
}
