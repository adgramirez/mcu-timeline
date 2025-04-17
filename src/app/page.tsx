import './globals.css';

export default function Home() {
  const nodes = [
    { id: 1, x: "15%", y: "50%" },
    { id: 2, x: "35%", y: "60%" },
    { id: 3, x: "55%", y: "50%" },
    { id: 4, x: "75%", y: "40%" },
    { id: 5, x: "90%", y: "45%" },
  ];

  return (
    <div className="w-screen h-screen">
      <div className="w-max h-full overflow-x-auto relative">
        <div className="relative min-w-[200px]" style={{ height: '800px' }}>
          <img
            src="/images/sacredtimeline.jpg"
            alt="Sacred Timeline"
            className="h-full object-contain"
          />

          {/* Nodes */}
          {nodes.map((node) => (
            <div
              key={node.id}
              className="absolute w-6 h-6 bg-red-500 rounded-full cursor-pointer hover:scale-125 transition-transform"
              style={{
                top: node.y,
                left: node.x,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
