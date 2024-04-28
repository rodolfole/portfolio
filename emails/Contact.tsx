import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { FC, ReactElement } from "react";

interface ContactEmailProps {
  email: string;
  message: string;
  name: string;
}

const ContactEmail: FC<Readonly<ContactEmailProps>> = ({
  email,
  message,
  name,
}): ReactElement => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`https://res.cloudinary.com/dtqijixar/image/upload/v1692228802/Previews/Pokemom-base_thumnail_in7aqf.jpg`}
                width="40"
                height="37"
                alt="Rodolfo Lara Logo"
                className="my-0 mx-auto"
                loading="eager"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Contact <strong>Form</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Im {name},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong className="text-black">Message: </strong> {message}.
            </Text>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              This message was sent from rodolfolara.vercel.app{" "}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;
