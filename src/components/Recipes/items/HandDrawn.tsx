import { CassetteTape, Cube, Virus, ThumbsUp } from "@gdc/phosphor-icons-react";

import { RecipeProps } from "../Recipe";

const animation: RecipeProps = {
  title: "Hand Drawn",
  url: "https://stackblitz.com/edit/stackblitz-starters-4vqgkm?file=src%2FApp.tsx",
  Example() {
    return (
      <div className="example">
        <CassetteTape
          color="teal"
          style={{ filter: "url(#displacementFilter)" }}
        >
          <defs>
            <filter id="displacementFilter">
              <feTurbulence
                type="turbulence"
                baseFrequency="0.02"
                numOctaves="3"
                result="turbulence"
              />
              <feDisplacementMap
                in2="turbulence"
                in="SourceGraphic"
                scale="4"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </CassetteTape>
        <Cube color="teal" style={{ filter: "url(#displacementFilter)" }} />
        <ThumbsUp color="teal" style={{ filter: "url(#displacementFilter)" }} />
        <Virus color="teal" style={{ filter: "url(#displacementFilter)" }} />
      </div>
    );
  },
};

export default animation;
