import { useContext } from "react";
import { TasksContext } from "../../Providers/Tasks";
<<<<<<< HEAD
<<<<<<< HEAD
import styled from "styled-components";
import "./styles.css";
import { Link } from "react-router-dom";
=======
=======
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
import {
    Container,
    Header,
    AddTask,
    Body,
    RemoveTask,
    Group,
    NavFilter,
    ButtonFilter,
    Display,
    Date,
    TagTeam,
    Nav,
    ContainerPrincipal,
    Label,
    LabelExp,
} from "./style";
<<<<<<< HEAD
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
=======
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
// --- modal ---
import { useState } from "react";
import { ModalMembro } from "../../Modals/ModalMembros";
import { ModalMembroAdd } from "../../Modals/ModalMembrosAdd";
//-- modal --
<<<<<<< HEAD
<<<<<<< HEAD
import {
    AiFillHome,
    AiOutlineImport,
    AiOutlineSnippets,
    AiOutlineLaptop,
    AiOutlineTeam,
    AiOutlineClockCircle,
    AiOutlineWechat,
    AiOutlineClose,
} from "react-icons/ai";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
=======
=======
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84

import {
    AiOutlineLaptop,
    AiOutlineTeam,
    AiOutlineClockCircle,
    //AiOutlineWechat,
    AiOutlineEdit,
} from "react-icons/ai";
import {
<<<<<<< HEAD
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
=======
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
    Box,
    Flex,
    Spacer,
    Button,
    ButtonGroup,
    Heading,
} from "@chakra-ui/react";
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
import { ModalAddTask } from "../../Modals/ModalAddTask";

import { ModalEditTask } from "../../Modals/ModalEditTask";
import { ModalAddSubTask } from "../../Modals/ModalAddSubTask";

// -- sideBar --
import SideBar from "../../components/SideBar/SideBar";
import getCurrentDate from "./getCurrentDate";
import { CardNewTask } from "../../components/Cards/CardNewTask";
<<<<<<< HEAD
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
=======
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84

const Projects = () => {
    const [openM, setOpenM] = useState(false);
    const [openMAdd, setOpenMAdd] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD

    const addMembros = () => {
        setOpenMAdd(true);
        setOpenM(false);
=======
=======
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
    const [openAddTask, setOpenAddTask] = useState(false);
    const [openEditTask, setOpenEditTask] = useState(false);
    const [openAddSubTask, setOpenAddSubTask] = useState(false);

    const editTesk = (target) => {
        setOpenEditTask(true);
    };

    const none = "none";
    const flex = "flex";
    const [openSideBar, setOpenSideBar] = useState(none);

    const addMembros = () => {
        setOpenMAdd(true);
<<<<<<< HEAD
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
=======
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
    };
    const checkMembers = () => {
        setOpenM(true);
        setOpenMAdd(false);
    };
<<<<<<< HEAD
<<<<<<< HEAD

    const { tasks, addTask, removeTask } = useContext(TasksContext);

    const Container = styled.div`
        width: 100%;
        display: flex;
        background-color: #02072f;
    `;

    const Home = styled.a`
        color: #ffffff;
        margin-top: 30px;
        font-weight: 500;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 30px;
        font-size: 25px;
        width: 100%;
        justify-content: center;
    `;
    const MenuLateral = styled.div`
        background-color: #6d17b0;
        width: 15%;
        height: 100%;
        min-height: 100vh;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    `;
    const Logo = styled.h4`
        color: #a346ff;
        display: flex;
        flex-direction: row;
        font-family: "Mitr", sans-serif;
        text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.679);
        font-size: 50px;
        margin-top: 30px;
    `;
    const Logo2 = styled.h4`
        color: #fab219;
    `;
    const Sair = styled.a`
        color: #feee35;
        margin-top: 90px;
        font-weight: 500;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight: 500;
        font-size: 25px;
        width: 40%;
        justify-content: space-around;
    `;

    const Header = styled.header`
        display: flex;
        flex-direction: row;
        color: #ffff;
        margin-top: 60px;
        width: 100%;
        font-size: 50px;
        justify-content: space-between;
    `;
    const AddTask = styled.button`
        background-color: #feee35;
        border-radius: 25.8319px;
        padding: 7px;
        color: #444444;
        height: 56.67px;
        font-weight: 600;
    `;
    const RemoveTask = styled.button`
        background-color: #6d17b0;
        border-radius: 25.8319px;
        padding: 7px;
        color: #ffff;
        margin-left: 20px;
        height: 56.67px;
        font-weight: 500;
    `;
    const Group = styled.button`
        background-color: #57aad9;
        border-radius: 8px;
        padding: 7px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 56.67px;
        margin-left: 30px;
        font-weight: 700;
    `;
    const NavFilter = styled.nav`
        display: flex;
        width: 60%;
        align-items: center;
        justify-content: space-between;
    `;
    const ButtonFilter = styled.button`
        background-color: #feee35;
        font-weight: 700;
        border-radius: 25px;
        margin-top: 20px;
        margin-left: 20px;
        height: 50px;
        min-width: 150px;
        padding: 7px;
    `;

    const Display = styled.div`
        display: flex;
        flex-wrap: wrap;
        width: 70%;
    `;
    const Date = styled.div`
        margin-left: 5px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 10px;
    `;
=======
    const openAddTaskFunc = () => {
        /* setOpenM(true); */
        setOpenAddTask(true);
    };
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84

=======
    const openAddTaskFunc = () => {
        /* setOpenM(true); */
        setOpenAddTask(true);
    };

>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
    const handleOpenSideBar = () => {
        if (openSideBar === none) {
            setOpenSideBar(flex);
        } else {
            setOpenSideBar(none);
        }
    };
    const { tasks, removeTask } = useContext(TasksContext);
    const [showTasks, setShowTasks] = useState(tasks);

    function clickClose(target) {
        removeTask(target);
        setShowTasks(tasks);
    }

    function filtrar(event) {
        if (event === "Todas") return setShowTasks(tasks);
        if (event === "Concluídas") {
            setShowTasks(tasks.filter((tasks) => tasks.status === "concluida"));
        }

        if (event === "Atrasadas") {
            setShowTasks([]);
            const filtradas = [];
            for (let i = 0; i < tasks.length; i++) {
                const yrTask =
                    tasks[i].expirationDate[6] +
                    tasks[i].expirationDate[7] +
                    tasks[i].expirationDate[8] +
                    tasks[i].expirationDate[9];
                const mTask =
                    tasks[i].expirationDate[3] + tasks[i].expirationDate[4];
                const dTask =
                    tasks[i].expirationDate[0] + tasks[i].expirationDate[1];

                if (
                    parseInt(yrTask) < getCurrentDate().year ||
                    (parseInt(yrTask) <= getCurrentDate().year &&
                        parseInt(mTask) < getCurrentDate().month) ||
                    (parseInt(yrTask) <= getCurrentDate().year &&
                        parseInt(mTask) <= getCurrentDate().month &&
                        parseInt(dTask) < getCurrentDate().date)
                ) {
                    filtradas.push(tasks[i]);
                }
            }
            setShowTasks(filtradas);
        }
    }
    return (
<<<<<<< HEAD
<<<<<<< HEAD
        <body>
            <>
=======
=======
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
        <Body>
            <>
                {openAddSubTask && (
                    <ModalAddSubTask
                        subTask
                        setOpenEditTask={setOpenEditTask}
                        setOpenAddSubTask={setOpenAddSubTask}
                    />
                )}
                {openEditTask && (
                    <ModalEditTask
                        setOpenAddSubTask={setOpenAddSubTask}
                        setOpenEditTask={setOpenEditTask}
                    />
                )}
                {openAddTask && (
                    <ModalAddTask setOpenAddTask={setOpenAddTask} />
                )}
<<<<<<< HEAD
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
=======
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
                {openMAdd && (
                    <ModalMembroAdd
                        setOpenM={setOpenM}
                        setOpenMAdd={setOpenMAdd}
                    />
                )}
                {openM && (
                    <ModalMembro addMembros={addMembros} setOpenM={setOpenM} />
                )}
            </>
            <Container>
<<<<<<< HEAD
<<<<<<< HEAD
                <MenuLateral>
                    <Logo>
                        Bum<Logo2>p</Logo2>
                    </Logo>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
                        alt="ícone de usuario"
                    />
                    <Home className="home">
                        <AiFillHome />
                        <Link to="/dashboard">Home</Link>
                    </Home>

                    <Accordion
                        defaultIndex={[0]}
                        allowMultiple
                        fontSize="10px"
                        textAlign={"center"}
                        width={"100%"}
                    >
                        <AccordionItem
                            width={"100%"}
                            color={"#FFF"}
                            fontSize={"20px"}
                        >
                            <h2>
                                <AccordionButton>
                                    <Box
                                        flex="1"
                                        textAlign="left"
                                        width={"100%"}
                                    >
                                        Coleções
                                    </Box>
                                    <AiOutlineSnippets /> <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>Kenzie</AccordionPanel>
                            <AccordionPanel pb={4}>Escola</AccordionPanel>
                            <AccordionPanel pb={4}>
                                Tarefas domésticas
                            </AccordionPanel>
                            <AccordionPanel pb={4}>Rotina</AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    <Sair>
                        <AiOutlineImport />
                        Sair
                    </Sair>
                </MenuLateral>
                <div className="container-principal">
                    <Header>
                        <nav className="nav-header">
                            <AiOutlineLaptop size={100} />
                            <h6> Rotina</h6>
                            <RemoveTask>Excluir Coleção</RemoveTask>
                        </nav>
                        <nav className="nav-header">
                            <AddTask>Adicionar +</AddTask>
=======
=======
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
                <SideBar
                    setShowSideBar={setOpenSideBar}
                    showSideBar={openSideBar}
                />
                <ContainerPrincipal className="container-principal">
                    <Button
                        onClick={handleOpenSideBar}
                        display={["flex", "flex", "none"]}
                    >
                        Menu
                    </Button>
                    <Header>
                        <Nav className="nav-header">
                            <AiOutlineLaptop size={100} />
                            <h6> Rotina</h6>
                            <RemoveTask>Excluir Coleção</RemoveTask>
                        </Nav>
                        <Nav className="nav-header">
                            <AddTask onClick={openAddTaskFunc}>
                                Adicionar +
                            </AddTask>
<<<<<<< HEAD
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
=======
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84

                            <Group onClick={checkMembers}>
                                <AiOutlineTeam />2
                            </Group>
<<<<<<< HEAD
<<<<<<< HEAD
                        </nav>
                    </Header>

                    <NavFilter>
                        <ButtonFilter>Data</ButtonFilter>
                        <ButtonFilter>Concluídas</ButtonFilter>
                        <ButtonFilter>Atrasadas</ButtonFilter>
                    </NavFilter>
                    <Display>
                        {/* filtrar rotinas e jogar dentro dos cards */}
                        <Flex
                            background={"white"}
                            margin={"35px"}
                            display={"flex"}
                            flexDir={"column"}
                            width={"300px"}
                            borderRadius={"15px"}
                        >
                            <Heading
                                size="xs"
                                padding={"10px"}
                                display={"flex"}
                                justifyContent={"space-between"}
                            >
                                <label>10/05/2022</label>
                                <Button colorScheme="none" color={"black"}>
                                    <AiOutlineClose size={"25"} />
                                </Button>
                            </Heading>
                            <Box
                                fontSize={"30"}
                                fontWeight={"500"}
                                padding={"0px 10px"}
                            >
                                Criar Projeto de notificação
                            </Box>

                            <Spacer />
                            <ButtonGroup gap="2">
                                <Date>
                                    <label className="expiration-date">
                                        <AiOutlineClockCircle />
                                        Mar 26
                                    </label>
                                    <button
                                        className="tag-team"
                                        onClick={addMembros}
                                    >
                                        <AiOutlineTeam />
                                    </button>
                                </Date>
                            </ButtonGroup>
                        </Flex>
                    </Display>
                </div>
            </Container>
        </body>
=======
=======
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
                        </Nav>
                    </Header>

                    <NavFilter>
                        <ButtonFilter
                            onClick={(event) => filtrar(event.target.innerText)}
                        >
                            Data
                        </ButtonFilter>
                        <ButtonFilter
                            onClick={(event) => filtrar(event.target.innerText)}
                        >
                            Concluídas
                        </ButtonFilter>
                        <ButtonFilter
                            onClick={(event) => filtrar(event.target.innerText)}
                        >
                            Atrasadas
                        </ButtonFilter>
                        <ButtonFilter
                            onClick={(event) => filtrar(event.target.innerText)}
                        >
                            Todas
                        </ButtonFilter>
                    </NavFilter>
                    <Display>
                        {showTasks.map((results) => {
                            return (
                                <Flex
                                    background={"white"}
                                    margin={"35px"}
                                    display={"flex"}
                                    flexDir={"column"}
                                    width={"300px"}
                                    borderRadius={"15px"}
                                    id={results.id}
                                >
                                    <Heading
                                        size="xs"
                                        padding={"10px"}
                                        display={"flex"}
                                        justifyContent={"space-between"}
                                    >
                                        <Label>{results.creationDate}</Label>
                                        <Label
                                            href=""
                                            onClick={() =>
                                                clickClose(results.id)
                                            }
                                        >
                                            X
                                        </Label>
                                    </Heading>
                                    <Box
                                        fontSize={"30"}
                                        fontWeight={"500"}
                                        padding={"0px 10px"}
                                    >
                                        {results.description}
                                    </Box>

                                    <Spacer />
                                    <ButtonGroup gap="2">
                                        <Date>
                                            <LabelExp className="expiration-date">
                                                <AiOutlineClockCircle />
                                                {results.expirationDate}
                                            </LabelExp>
                                            <AiOutlineEdit
                                                size="40"
                                                onClick={() =>
                                                    editTesk(results.id)
                                                }
                                            />
                                            <TagTeam
                                                className="tag-team"
                                                onClick={addMembros}
                                            >
                                                <AiOutlineTeam />
                                                {results.members.length}
                                            </TagTeam>
                                        </Date>
                                    </ButtonGroup>
                                </Flex>
                            );
                        })}
                    </Display>
                </ContainerPrincipal>
            </Container>
        </Body>
<<<<<<< HEAD
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
=======
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
    );
};
export default Projects;
