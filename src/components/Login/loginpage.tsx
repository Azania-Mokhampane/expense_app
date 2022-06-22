import React, { useState, useContext } from "react";
import { Box } from "./loginstyles";

import {
  Stack,
  Heading,
  Input,
  Button,
  Text,
  ChakraProvider,
} from "@chakra-ui/react";
import AuthContext from "../../store/auth-context";
// type ILOGIN = {
//   LoggenIn: React.Dispatch<React.SetStateAction<boolean>>;
// };
const Login = () => {
  const AuthCtx = useContext(AuthContext);

  // const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState({
    value: "",
    error: "",
  });
  const [userPassword, setUserPassword] = useState("");

  const emailValidator = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    if (!email) return "Email can't be empty.";
    if (!re.test(email))
      return "Email entered not valid. Please enter a valid email.";
    return "";
  };

  const emailError = emailValidator(userEmail.value);

  const validation = !userPassword.length || !AuthCtx.userName.length;

  const SubmitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setUserEmail({ ...userEmail, value: "" });

    if (emailError) {
      setUserEmail({ ...userEmail, error: emailError });
      return;
    }
    // props.LoggenIn(true);
    AuthCtx.onLogin();
    // localStorage.setItem("userName", JSON.stringify(AuthCtx.userName));
    localStorage.setItem("isLoggedin", "1");
  };

  return (
    <>
      <ChakraProvider>
        <Box>
          <div className="container">
            <Stack spacing={{ base: 10, md: 20 }}>
              <Heading
                lineHeight={1.1}
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
              >
                Keep an accurate record of your personal or business expenses.
              </Heading>
            </Stack>
            <Stack
              bg={"gray.50"}
              rounded={"xl"}
              p={{ base: 4, sm: 6, md: 8 }}
              spacing={{ base: 8 }}
              maxW={{ lg: "lg" }}
            >
              <Stack spacing={4}>
                <Heading
                  color={"gray.800"}
                  lineHeight={1.1}
                  fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                >
                  Login Form
                </Heading>
              </Stack>
              <form onSubmit={SubmitHandler} style={{ marginTop: 10 }}>
                <Stack spacing={4}>
                  <Input
                    type={"text"}
                    value={AuthCtx.userName}
                    onChange={AuthCtx.nameHandler}
                    placeholder="Firstname"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                  <Input
                    // type={"email"}
                    value={userEmail.value}
                    onChange={(e) =>
                      setUserEmail({ ...userEmail, value: e.target.value })
                    }
                    placeholder="Email"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                  <Text style={{ color: "red" }}>{userEmail.error}</Text>
                  <Input
                    value={userPassword}
                    type={"password"}
                    onChange={(e) => setUserPassword(e.target.value)}
                    placeholder="Password"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                </Stack>
                <Button
                  type={"submit"}
                  disabled={validation}
                  fontFamily={"heading"}
                  mt={8}
                  w={"full"}
                  bgGradient="linear(to-r, purple.400,blue.400)"
                  color={"white"}
                  _hover={{
                    bgGradient: "linear(to-r, red.400,pink.400)",
                    boxShadow: "xl",
                  }}
                >
                  Login
                </Button>
              </form>
            </Stack>
          </div>
        </Box>
      </ChakraProvider>
    </>
  );
};

export default Login;
