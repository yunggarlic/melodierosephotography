export default function Hero() {
  return (
    <div className="relative container-default h-screen-minus-nav">
      <video className="w-full h-full object-cover object-left" width={1200} height={800} autoPlay muted loop>
        <source src="/videos/hero-vid.mp4" />
        Your browser does not support videos.
      </video>
      <div className="hidden absolute absolute-center z-10 mix-blend-exclusion">
        <h1 className="text-white text-center">Melodie Rose</h1>
        <p className="text-white text-center">Film and Photography</p>
      </div>
    </div>
  );
}
