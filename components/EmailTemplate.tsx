import { FC } from "react";
import Button from "./ui/Button";

interface EmailTemplateProps {
  firstName: string;
}

const EmailTemplate: FC<Readonly<EmailTemplateProps>> = ({ firstName }) => (
  <div>
    <h1>Welcome, {firstName}!</h1>

    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, aliquam.
      Veritatis itaque obcaecati in ex rerum sed saepe, voluptate fugit
      pariatur? Rerum tenetur autem nisi amet explicabo officiis, quod dolorum.
    </p>

    <Button>
      <a href="https://github.com/rodolfole">Go to gihub</a>
    </Button>
  </div>
);

export default EmailTemplate;
