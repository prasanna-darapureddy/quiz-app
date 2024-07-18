import { Box, Button, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import QuestionItem from '../questionItem/QuestionItem'
import { styles } from './HomeStyles'


const questionsList = [
    {
        id: 1,
        question: 'What is ReactJS?',
        options: ['Server-side framework', 'User interface framework', 'Both 1 & 2', 'None of the above'],
        answer: 'User interface framework',
        score: 0,
    },
    {
        id: 2,
        question: 'Which of the following is used in React.js to increase performance?',
        options: ['Virtual DOM', 'Original DOM', 'Both 1 & 2', 'None of the above',],
        answer: 'Virtual DOM',
        score: 0,
    },
    {
        id: 3,
        question: 'Identify the one which is used to pass data to components from outside',
        options: ['Render with arguments', 'setState', 'PropTypes', 'Props',],
        answer: 'Props',
        score: 0,
    },
    {
        id: 4,
        question: 'What is Babel?',
        options: ['JS Compiler', 'JS Interpreter', 'JS Transpiler', 'None of the above',],
        answer: 'JS Compiler',
        score: 0,
    },
    {
        id: 5,
        question: 'How many elements can a valid react component return?',
        options: ['1', '2', '3', '4',],
        answer: '1',
        score: 0,
    },
    {
        id: 6,
        question: 'Identify the smallest building block of React.JS.',
        options: ['Props', 'Elements', 'Components', 'None of the above',],
        answer: 'Components',
        score: 0,
    },
    {
        id: 7,
        question: 'Which of the following are two ways to handle data in react?',
        options: ['Services & components', 'State & Props', 'State & Services', 'State & Component',],
        answer: 'State & Props',
        score: 0,
    },
    {
        id: 8,
        question: 'ES6 stands for _________',
        options: ['ECMA 6', 'ECMA Javascript6', 'ECMAScript 6', 'EScript6',],
        answer: 'ECMAScript 6',
        score: 0,
    },
    {
        id: 9,
        question: 'The function which is called to render HTML to a web page in react?',
        options: ['ReactDOM_render()', 'render()', 'render_DOM()', 'DOM_HTML()',],
        answer: 'render()',
        score: 0,
    },
    {
        id: 10,
        question: 'What is useState?',
        options: ['Hook', 'Component', 'All of these', 'None of these',],
        answer: 'Hook',
        score: 0,
    },
]

interface IState {
    currentIndex: number;
    isEnd: boolean,
    selectedList: string[],
    isMarked: boolean,
    timeLeft: number,
}

function Home() {
    const [currentIndex, setCurrentIndex] = useState<IState['currentIndex']>(0)
    const [isEnd, setIsEnd] = useState<IState['isEnd']>(false)
    const [isMinScore, setIsMinScore] = useState<IState['isEnd']>(false)
    const [selectedList, setSelectedList] = useState<IState['selectedList']>([...Array(questionsList.length).fill('')])
    const [numsList, setNumsList] = useState<IState['selectedList']>([...Array(questionsList.length).fill('')])
    const [timeLeft, setTimeLeft] = useState<IState['timeLeft']>(0.5 * 60);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const totalScore = questionsList.reduce((total, curr) => { return total + curr.score }, 0)


    useEffect(() => {
        const intervalId = setInterval(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1);
            }
        }, 1000);

        if (minutes === 0 && seconds === 0) {
            setCurrentIndex(currentIndex => currentIndex + 1)
            setTimeLeft(0.5 * 60)
        }
        if (currentIndex === questionsList.length) {
            setIsEnd(true)
        }

        return () => clearInterval(intervalId);

    }, [timeLeft, minutes, seconds, currentIndex]);


    const onClickNumbers = (num: number) => {
        setCurrentIndex(num)
        setTimeLeft(0.5 * 60)
    }

    const handleOption = (option: string) => {
        let updatedSelections = [...selectedList]
        updatedSelections[currentIndex] = option
        setSelectedList(updatedSelections)

        const correctAnswer = questionsList[currentIndex].answer
        if (option === correctAnswer) {
            questionsList[currentIndex].score = 1
        } else {
            questionsList[currentIndex].score = 0
        }

        if (option !== '') {
            let updatedNums = [...numsList]
            updatedNums[currentIndex] = 'n'
            setNumsList(updatedNums)
        }
    }

    const onClickPrevs = () => {
        if (currentIndex > 0) {
            setCurrentIndex(index => index - 1)
            setTimeLeft(0.5 * 60)
        }
    }

    const onClickNext = () => {
        setCurrentIndex(index => index + 1)
        setTimeLeft(0.5 * 60)
        if (currentIndex === questionsList.length) {
            setIsEnd(true)
        }

    }

    const onClickSubmit = () => {
        questionsList.filter(eachQuestion => eachQuestion.score > 0 && setIsEnd(true))
        questionsList.filter(eachQuestion => {
            if (eachQuestion.score === 0) {
                setIsMinScore(true)
            } else {
                setIsMinScore(false)
            }
        })
    }

    const onClickRestart = () => {
        window.location.reload();
    }


    return (

        <Box sx={styles.bgContainer}>
            {isMinScore ? <Typography variant='h6' sx={styles.minAlert}>Attempt Atleast One Question</Typography> : null}
            <Typography variant='h2' sx={styles.heading}>React Quiz</Typography>
            {isEnd ?
                <Box sx={styles.scoreContainer}>
                    <Typography variant='h4'>Score: <Box component={'span'} sx={styles.score}>{totalScore}</Box></Typography>
                    <Button variant='contained' onClick={onClickRestart} sx={styles.restart}>Restart</Button>
                </Box>
                :
                <>
                    <Box sx={styles.numButtonsContainer}>
                        {questionsList.map((Q, index) =>
                            <Box key={Q.id} component={'button'} sx={numsList[index] !== '' ? styles.markedNumButtons : styles.emptyNumButtons}
                                onClick={() => onClickNumbers(index)}>{index + 1}</Box>
                        )}
                    </Box>
                    <Box sx={styles.questionsContianer}>
                        {questionsList.slice(currentIndex, currentIndex + 1).map(eachQuestion =>
                            <QuestionItem
                                key={eachQuestion.id}
                                eachQuestion={eachQuestion}
                                handleOption={handleOption}
                                selectedList={selectedList}
                                currentIndex={currentIndex}
                            />
                        )}
                    </Box>
                    <Box sx={styles.buttonsContainer}>
                        <Button variant='contained' disabled={currentIndex === 0} sx={styles.button}
                            onClick={onClickPrevs}>Previous</Button>
                        {currentIndex === questionsList.length - 1 ? <Button variant='contained' sx={styles.button} onClick={onClickSubmit}>Submit</Button> : <Button variant='contained' sx={styles.button} onClick={onClickNext}>Next</Button>}
                    </Box>

                    <Box sx={styles.timerContainer}>
                        <Typography>{`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`} Left Only</Typography>
                    </Box>

                </>
            }
        </Box>

    )
}

export default Home
