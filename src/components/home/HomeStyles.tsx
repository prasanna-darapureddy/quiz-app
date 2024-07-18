export const styles = {
    bgContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight:'100vh',
        padding:'30px',
        gap:8,
        backgroundImage:'linear-gradient(#ffff, #d2f7f6, #badcf4)',
        backgroundSize:'cover',
    },
    heading:{
        fontSize: {xs:'20px', sm:'30px', md:'40px',}
    },
    numButtonsContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: {xs: 1, sm:2, md:3},
        flexWrap: 'wrap',
        alignSelf: 'center',
    },
    emptyNumButtons:{
        padding:'10px',
        borderRadius:'50px',
        border: '1px solid #c8c8c8',
        width:'40px',
        backgroundColor:'transparent',
        '&:hover':{
            backgroundColor:'#edf0f2',
        },
        '&:active':{
            backgroundColor:'#ffff'
        },
    },
    markedNumButtons:{
        padding:'10px',
        borderRadius:'50px',
        border: '1px solid #c8c8c8',
        width:'40px',
        backgroundColor:'#fcfbb8',
    },
    questionsContianer:{
        display: 'flex',
        // justifyContent: 'center',
        alignSelf: 'center',
    },
    buttonsContainer:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width:'300px',  
    },
    button:{
        textTransform: 'capitalize',
        backgroundColor:'primary',
        color:'#fff',
    },
    scoreContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        gap:3,
    },
    score:{
        color:'#009dff',
        fontWeight:700,
        fontSize:'40px',
    },
    timerContainer:{
        alignSelf:'center',
        color:'red',
    },
    minAlert:{
        color:'red',
    },
    restart:{
        textTransform: 'capitalize',
    }
}