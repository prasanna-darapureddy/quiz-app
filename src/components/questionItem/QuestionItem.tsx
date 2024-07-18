import { Box, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import { styles } from './QuestionItemStyles'

interface IProps{
  eachQuestion:{
    id:number,
    question:string,
    options:string[],
    answer:string,
  },
  handleOption: (option:string) => void,
  selectedList: string[],
  currentIndex: number,
}

function QuestionItem(props: IProps) {
  const {eachQuestion, handleOption, selectedList, currentIndex} = props
  const { id, question, options,} = eachQuestion

  const onChangeOption = (option:string) => {
    handleOption(option)
  }
    
  return (
   
    <Box sx={styles.questionItem}>
      <Typography variant='h5'>{id}. {question}</Typography>
      <RadioGroup name="radio-buttons-group">
        {options.map((option) => 
          <FormControlLabel key={option} value={option} name={option} control={<Radio />} label={option} sx={styles.options} 
          onChange={() => onChangeOption(option)} checked={selectedList[currentIndex] === option}/>
        )}
      </RadioGroup>
    </Box>   
  )
}

export default QuestionItem
