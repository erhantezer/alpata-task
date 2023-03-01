
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
          <span className='text-danger fs-5 fw-bold'>Alpata Teknoloji & Yazılım</span><br />
          Alpata Teknoloji ve Yazılım son zamanlarda popülaritesi artan milli yazılım, milli teknoloji üretimini 2000 yılından bu yana Eskişehir merkezli olarak gerçekleştirmektedir. Eskişehir’in ardından Ankara ofisini de hizmete almış ve ulusal bir marka olma yolunda emin adımlar ile ilerlemektedir.
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
            Teknolojinin hızla geliştiği bu yıllarda güçlü ve dinamik çalışan kadrosu ile firmalara, kurumlara yenilikçi ürettiği teknolojiler ile hizmet vermektedir. Alpata grup şirketlerine bağlı, Alpata Teknoloji ve Yazılım 18 seneyi aşkın süredir ürettiği yazılım ve teknolojileri birçok üniversiteden ve denetleyici kuruluştan onay almıştır. Firma ISO 9001 ve ISO 27001 sertifikaları ile uluslararası alanda bir oyuncu olmayı başarmıştır.
          </Typography>
          <Typography sx={{ textAlign: "justify", textIndent: "20px" }} paragraph>
            Sektörde kurulduğu günden bu yana 500 aşan firma ve kuruma hizmet vererek alanında öncü ürünler ile global pazarda da ülkemizden çıkan tamamen yerli sermayeye sahip bir firma hedefi ile sürdürülebilir üretim anlayışını kendine misyon edinerek hizmet vermeye ve büyümeye devam etmektedir.
          </Typography>
          <Typography sx={{ textAlign: "justify", textIndent: "20px" }}>
            Başta üretim ve hizmet sektörü olmak üzere çeşitli alanlarda insan hatalarını en aza indirip süreçlerin doğru ve eksiksiz yönetilmesini sağlayarak, işletme maliyetini düşürecek çözümler üreten Alpata Teknoloji ve Yazılım, tamamıyla kendi üretimi olan ürünleri ve sorunları geniş yelpazede çözebilen yaklaşımı ile rakiplerinin her zaman bir adım önünde olmayı başarmıştır.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}