export const Banner = () => {
  return (
    <div className="py-3 text-center bg-[linear-gradient(to_right,rgb(252,_214,_255,_.7),rgb(41,_216,_255,_.7),rgb(255,_253,_128,_.7),rgb(248,_154,_191,_.7),rgb(252,_214,_255,_.7))]">
      <div>
        <p className="font-medium text-[14px]/2 sm:text-[16px]/4">
          <span className="hidden sm:inline">
            Introducing a completely redesigned interface -{" "}
          </span>
          <a href="#" className="underline underline-offset-4">
            Get started with Tasky
          </a>
        </p>
      </div>
    </div>
  );
};
