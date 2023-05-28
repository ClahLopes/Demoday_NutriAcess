import { VideoCamera } from "@phosphor-icons/react";
import Button from "../../../../components/button/button";
import { Text } from "../../../../components/text/text";
import { Container, PatientInfo } from "./schedulingCard.styles";
import { useTheme } from "styled-components";

export const SchedulingCard = () => {
  const theme = useTheme();

  return (
    <Container>
      <PatientInfo>
        <div>
          <Text color="preto" height={26} size="22" weight={500}>
            Data e hora: 31/10/2024 - 10:34 hrs
          </Text>
        </div>
        <div>
          <Text color="preto" height={26} size="22" weight={500}>
            Paciente: Jonh Doe
          </Text>
        </div>

        <div>
          <Text color="preto" height={26} size="22" weight={500}>
            Descrição: Lorem ipsum...
          </Text>
        </div>
      </PatientInfo>
      <Button
        icon={
          <VideoCamera color={theme.Colors.branco} weight="regular" size={24} />
        }
        title="Entrar na chamada"
        variant="primario"
      />
    </Container>
  );
};
