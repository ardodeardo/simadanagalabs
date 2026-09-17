import Section from "@/app/components/Section";

function Hero() {
  return (
    <Section id="hero" className="pt-24">
      <h1 className="relative text-4xl font-medium leading-[140%] z-10">
        A{" "}
        <span className="text-[#0000FF]/64 font-semibold italic">creative</span>{" "}
        space built with code, design, and curiosity.
      </h1>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="476"
        height="436"
        viewBox="0 0 476 436"
        fill="none"
        className="absolute z-0 -right-60 -bottom-12"
      >
        <g filter="url(#filter0_f_304_2)">
          <ellipse
            cx="238"
            cy="218"
            rx="110"
            ry="90"
            fill="#0000FF"
            fillOpacity="0.12"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_304_2"
            x="0"
            y="0"
            width="476"
            height="436"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="64"
              result="effect1_foregroundBlur_304_2"
            />
          </filter>
        </defs>
      </svg>
    </Section>
  );
}

export default Hero;
