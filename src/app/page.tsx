import './globals.css';

export default function Home() {
  const nodes = [
    { id: 1, x: "5%", y: "45%", title: "Captain America: TFA" },
    { id: 2, x: "10%", y: "45%", title: "Captain Marvel" },
    { id: 3, x: "14%", y: "52%", title: "Iron Man" },
    { id: 4, x: "18 %", y: "56%", title: "The Incredible Hulk" },
    { id: 5, x: "22%", y: "60%", title: "Iron Man 2" },
    { id: 6, x: "25%", y: "61%", title: "Thor" },
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
          {nodes.map((node) => (
            <div
              key={node.id}
              className="absolute flex flex-col items-center w-max"
              style={{
                top: node.y,
                left: node.x,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Node circle */}
              <div className="w-6 h-6 bg-red-500 rounded-full cursor-pointer" />
            
              {/* Arrow and label */}
              <div className="flex flex-col items-center mt-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="mt-1 px-2 py-1 bg-black bg-opacity-70 text-xs rounded whitespace-nowrap text-center">
                  {node.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
