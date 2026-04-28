import { Button } from "@/components/Button/Button";
import {
  Actions,
  Blob,
  Blob2,
  Content,
  HeroWrapper,
  Inner,
  Lead,
  Tagline,
  Title,
  // Visual,
} from "./Hero.styles";
import Image from "next/image";
import { Portrait } from "@/app/page.styles";

export function Hero() {
  return (
    <HeroWrapper>
      <Blob aria-hidden="true" />
      <Blob2 aria-hidden="true" />

      <Inner>
        <Content>
          <Tagline>Hypnose ericksonienne · Cannes 06</Tagline>
          <Title>
            Retrouvez votre <em>équilibre intérieur</em>, en douceur.
          </Title>
          <Lead>
            Guylaine Demarle, infirmière diplômée d&apos;État et maître
            praticienne en hypnose, vous accompagne au cabinet ou à domicile
            pour transformer ce qui vous freine — sereinement, à votre rythme.
          </Lead>
          <Actions>
            <Button href="/contact" variant="primary">
              Prendre rendez-vous
            </Button>
            <Button href="/hypnose" variant="secondary">
              Découvrir l&apos;hypnose
            </Button>
          </Actions>
        </Content>

        {/* <Visual aria-hidden="true" /> */}

        <Portrait>
          <Image
            src="/images/hypnose.jpg"
            alt="hypnose méditation"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            style={{ objectFit: "cover" }}
          />
        </Portrait>
      </Inner>
    </HeroWrapper>
  );
}
