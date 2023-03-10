
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Webcam from "react-webcam";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Home() {
  const [like, setLike] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const currentUser = JSON.parse(localStorage.getItem("user"))
  console.log(window.atob(currentUser?.password))
  console.log(currentUser?.firstname);
  console.log((currentUser.image).split("\\")[2])


  


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar alt={`${currentUser?.firstname} ${currentUser?.lastname}`} src={(currentUser.image).split("\\")[2]} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${currentUser?.firstname} ${currentUser?.lastname}`}
        subheader={new Date().toDateString()}
      />
      <CardMedia
        component="img"
        height="120"
        width="120"
        image={currentUser?.image ? (currentUser.image).split("\\")[2] : ("/static/images/cards/paella.jpg")}
        alt={(currentUser.image).split("\\")[2]}
      />
      <CardContent>
        <Typography sx={{  textAlign:"justify"}} variant="body2" color="text.secondary">
          <span className='text-danger fs-5 fw-bold'>Alpata Teknoloji & Yaz??l??m</span><br />
          Alpata Teknoloji ve Yaz??l??m son zamanlarda pop??laritesi artan milli yaz??l??m, milli teknoloji ??retimini 2000 y??l??ndan bu yana Eski??ehir merkezli olarak ger??ekle??tirmektedir. Eski??ehir???in ard??ndan Ankara ofisini de hizmete alm???? ve ulusal bir marka olma yolunda emin ad??mlar ile ilerlemektedir.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => setLike(!like)}>
          {like ? <FavoriteIcon sx={{ color: "red" }} /> : <FavoriteIcon />} 
        </IconButton>


        <Button className="App" onClick={() => setShow(!show)}>
          <VideocamIcon/>
          {show ? <Webcam /> : null}
        </Button>
        

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
          <Typography sx={{ textAlign: "justify",textIndent:"20px" }} paragraph>
            Teknolojinin h??zla geli??ti??i bu y??llarda g????l?? ve dinamik ??al????an kadrosu ile firmalara, kurumlara yenilik??i ??retti??i teknolojiler ile hizmet vermektedir. Alpata grup ??irketlerine ba??l??, Alpata Teknoloji ve Yaz??l??m 18 seneyi a??k??n s??redir ??retti??i yaz??l??m ve teknolojileri bir??ok ??niversiteden ve denetleyici kurulu??tan onay alm????t??r. Firma ISO 9001 ve ISO 27001 sertifikalar?? ile uluslararas?? alanda bir oyuncu olmay?? ba??arm????t??r.
          </Typography>
          <Typography sx={{ textAlign: "justify", textIndent: "20px" }} paragraph>
            Sekt??rde kuruldu??u g??nden bu yana 500 a??an firma ve kuruma hizmet vererek alan??nda ??nc?? ??r??nler ile global pazarda da ??lkemizden ????kan tamamen yerli sermayeye sahip bir firma hedefi ile s??rd??r??lebilir ??retim anlay??????n?? kendine misyon edinerek hizmet vermeye ve b??y??meye devam etmektedir.
          </Typography>
          <Typography sx={{ textAlign: "justify", textIndent: "20px" }}>
            Ba??ta ??retim ve hizmet sekt??r?? olmak ??zere ??e??itli alanlarda insan hatalar??n?? en aza indirip s??re??lerin do??ru ve eksiksiz y??netilmesini sa??layarak, i??letme maliyetini d??????recek ????z??mler ??reten Alpata Teknoloji ve Yaz??l??m, tamam??yla kendi ??retimi olan ??r??nleri ve sorunlar?? geni?? yelpazede ????zebilen yakla????m?? ile rakiplerinin her zaman bir ad??m ??n??nde olmay?? ba??arm????t??r.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}