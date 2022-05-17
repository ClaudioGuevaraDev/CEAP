import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Layout from "../components/Layout";

interface IData {
  auth: string;
  credentials: {
    full_name: string;
    email: string;
    password: string;
    confirm_password: string;
    image: File | null;
  };
}

export default function Auth() {
  const [data, setData] = useState<IData>({
    auth: "login",
    credentials: {
      full_name: "Claudio Guevara",
      email: "example@gmail.com",
      password: "contraseña",
      confirm_password: "contraseña",
      image: null,
    },
  });

  const { colorMode } = useColorMode();

  return (
    <Layout>
      <Container maxW="container.lg">
        <Box
          style={{ height: "94vh" }}
          padding={4}
          textAlign="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Heading>Bienvenido al sistema de administración del CEAP</Heading>
          <Text mb={10} mt={2} color="green.500" fontSize="3xl">
            Ingrese sus credenciales para{" "}
            {data.auth === "login" ? "iniciar sesión" : "registrarse"}
          </Text>
          <Box
            width={{ base: "90%", md: "60%", lg: "50%" }}
            boxShadow="lg"
            p="6"
            rounded="md"
            background={colorMode === "light" ? "gray.50" : "gray.700"}
          >
            <FormControl>
              {data.auth === "register" && (
                <>
                  <FormLabel
                    htmlFor="full_name"
                    fontSize="larger"
                    fontWeight="semibold"
                  >
                    Nombre y Apellido
                  </FormLabel>
                  <Input
                    id="full_name"
                    type="text"
                    value={data.credentials.full_name}
                    onChange={(e) =>
                      setData({
                        ...data,
                        credentials: {
                          ...data.credentials,
                          full_name: e.target.value,
                        },
                      })
                    }
                    borderColor={
                      data.credentials.full_name === ""
                        ? "red.500"
                        : "green.500"
                    }
                    _hover={{
                      borderColor:
                        data.credentials.full_name === ""
                          ? "red.500"
                          : "green.500",
                    }}
                    _focus={{
                      borderColor:
                        data.credentials.full_name === ""
                          ? "red.500"
                          : "green.500",
                    }}
                  />
                </>
              )}
              <FormLabel
                htmlFor="email"
                mt={data.auth === "register" ? 4 : 0}
                fontSize="larger"
                fontWeight="semibold"
              >
                Correo electrónico
              </FormLabel>
              <Input
                id="email"
                type="email"
                value={data.credentials.email}
                onChange={(e) =>
                  setData({
                    ...data,
                    credentials: { ...data.credentials, email: e.target.value },
                  })
                }
                borderColor={
                  data.credentials.email === "" ? "red.500" : "green.500"
                }
                _hover={{
                  borderColor:
                    data.credentials.email === "" ? "red.500" : "green.500",
                }}
                _focus={{
                  borderColor:
                    data.credentials.email === "" ? "red.500" : "green.500",
                }}
              />
              <FormLabel
                htmlFor="password"
                mt={4}
                fontSize="larger"
                fontWeight="semibold"
              >
                Contraseña
              </FormLabel>
              <Input
                id="password"
                type="password"
                value={data.credentials.password}
                onChange={(e) =>
                  setData({
                    ...data,
                    credentials: {
                      ...data.credentials,
                      password: e.target.value,
                    },
                  })
                }
                borderColor={
                  data.credentials.password === "" ? "red.500" : "green.500"
                }
                _hover={{
                  borderColor:
                    data.credentials.password === "" ? "red.500" : "green.500",
                }}
                _focus={{
                  borderColor:
                    data.credentials.password === "" ? "red.500" : "green.500",
                }}
              />
              {data.auth === "register" && (
                <>
                  <FormLabel
                    htmlFor="confirm_password"
                    mt={4}
                    fontSize="larger"
                    fontWeight="semibold"
                  >
                    Confirmar contraseña
                  </FormLabel>
                  <Input
                    id="confirm_password"
                    type="password"
                    value={data.credentials.confirm_password}
                    onChange={(e) =>
                      setData({
                        ...data,
                        credentials: {
                          ...data.credentials,
                          confirm_password: e.target.value,
                        },
                      })
                    }
                    borderColor={
                      data.credentials.confirm_password === "" ||
                      data.credentials.confirm_password !==
                        data.credentials.password
                        ? "red.500"
                        : "green.500"
                    }
                    _hover={{
                      borderColor:
                        data.credentials.confirm_password === "" ||
                        data.credentials.confirm_password !==
                          data.credentials.password
                          ? "red.500"
                          : "green.500",
                    }}
                    _focus={{
                      borderColor:
                        data.credentials.confirm_password === "" ||
                        data.credentials.confirm_password !==
                          data.credentials.password
                          ? "red.500"
                          : "green.500",
                    }}
                  />
                </>
              )}
              {data.auth === "register" && (
                <>
                  <Input
                    type="file"
                    mt={4}
                    onChange={(e) => {
                      e.target.files !== null &&
                        setData({
                          ...data,
                          credentials: {
                            ...data.credentials,
                            image: e.target.files[0],
                          },
                        });
                    }}
                  />
                </>
              )}
              <Text
                mt={4}
                _hover={{ cursor: "pointer", textDecoration: "underline" }}
                fontStyle="italic"
                onClick={() =>
                  setData({
                    ...data,
                    auth: data.auth === "login" ? "register" : "login",
                  })
                }
                fontSize={18}
              >
                {data.auth === "login"
                  ? "¿No tienes una cuenta registrada?"
                  : "¿Ya tienes una cuenta registrada?"}
              </Text>
              <Link to="/admin">
                <Button
                  mt={5}
                  w="100%"
                  bg="green.500"
                  _hover={{ background: "green.400" }}
                  size="lg"
                  color="#fff"
                  _focus={{ borderColor: "none" }}
                >
                  {data.auth === "login" ? "INICIAR SESIÓN" : "REGISTRARSE"}
                </Button>
              </Link>
            </FormControl>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
