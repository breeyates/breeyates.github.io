import { useEffect } from "react";
import Typography from "../../components/typography";
import { skillsList } from "./constants";
import { SkillsContainer, textSx } from "./styles";
import './styles/css.css';

const SkillBanner: React.FC<{}> = () => {
  const dot = "\u25CF";

  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller');

    if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', 'true');

        const scrollerInner = scroller.querySelector('.scroller_inner');

        const scrollerContent = Array.from(scrollerInner?.children || []);

        scrollerContent.forEach(item => {
          const duplicatedItem: any = item.cloneNode(true);
          duplicatedItem.setAttribute('aria-hidden', true);
          scrollerInner?.append(duplicatedItem);
        })
      })
    }
  }, []);

  return (
    <SkillsContainer>
        <div className="scroller">
          <div className="scroller_inner">
              {skillsList.map(skill => (
                <div className="item">
                  <Typography
                    text={skill}
                    variant="anton"
                    color="yellow"
                    sx={textSx}
                  />
                  <Typography
                    text={dot}
                    variant="anton"
                    color="yellow"
                    sx={{...textSx, marginTop: '-8px'}}
                  />
                </div>
              ))}
            </div>
      </div>
    </SkillsContainer>
  );
}

export default SkillBanner;
