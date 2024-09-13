// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';

// export default function InfoBox({info}) {
   
//     const HOT_URL ="https://images.unsplash.com/photo-1484766280341-87861644c80d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//     const COLD_URL ="https://images.unsplash.com/photo-1516047487059-fd288d84e8cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//     const RAIN_URL ="https://images.unsplash.com/photo-1501691223387-dd0500403074?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

//     return(
//         <div className="InfoBox">
            
//             <Card sx={{ maxWidth: 345 }}>
//                 <CardMedia
//                     sx={{ height: 140 }}
//                     image={
//                         info.humidity > 80 
//                         ? RAIN_URL 
//                         : info.temp > 15 
//                         ? HOT_URL 
//                         : COLD_URL
//                     }
//                     title="green iguana"
//                 />
//                 <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                         {info.city} {
//                         info.humidity > 80 
//                         ? ThunderstormIcon 
//                         : info.temp > 15 
//                         ? WbSunnyIcon 
//                         : AcUnitIcon
//                     }
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                         <p>Temperature = {info.temp}&deg;C</p>
//                         <p>Humidity = {info.humidity}</p>
//                         <p>Min Temp = {info.tempMin}&deg;C</p>
//                         <p>Max Temp = {info.tempMax}&deg;C</p>
//                         <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
//                     </Typography>
//                 </CardContent>
                
//             </Card>
//         </div>
//     );
// }


// InfoBox.jsx
// import Card from '@mui/material/Card'; 
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';

// export default function InfoBox({ info }) {
//     const HOT_URL = "https://images.unsplash.com/photo-1484766280341-87861644c80d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//     const COLD_URL = "https://images.unsplash.com/photo-1516047487059-fd288d84e8cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//     const RAIN_URL = "https://images.unsplash.com/photo-1501691223387-dd0500403074?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

//     const getIcon = () => {
//         if (info.humidity > 80) return <ThunderstormIcon />;
//         if (info.temp > 15) return <WbSunnyIcon />;
//         return <AcUnitIcon />;
//     };

//     return (
//         <div className="InfoBox">
//             <Card sx={{ maxWidth: 345 }}>
//                 <CardMedia
//                     sx={{ height: 140 }}
//                     image={
//                         info.humidity > 80 
//                             ? RAIN_URL 
//                             : info.temp > 15 
//                             ? HOT_URL 
//                             : COLD_URL
//                     }
//                     title="Weather image"
//                 />
//                 <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                         {info.city} {getIcon()}
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                         <p>Temperature = {info.temp}&deg;C</p>
//                         <p>Humidity = {info.humidity}%</p>
//                         <p>Min Temp = {info.tempMin}&deg;C</p>
//                         <p>Max Temp = {info.tempMax}&deg;C</p>
//                         <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
//                     </Typography>
//                 </CardContent>
//             </Card>
//         </div>
//     );
// }


// InfoBox.jsx
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
    const HOT_URL = "https://images.unsplash.com/photo-1484766280341-87861644c80d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1516047487059-fd288d84e8cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1501691223387-dd0500403074?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const getIcon = () => {
        if (info.humidity > 80) return <ThunderstormIcon />;
        if (info.temp > 15) return <WbSunnyIcon />;
        return <AcUnitIcon />;
    };

    return (
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity > 80 
                            ? RAIN_URL 
                            : info.temp > 15 
                            ? HOT_URL 
                            : COLD_URL
                    }
                    title="Weather image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {getIcon()}
                    </Typography>
                    {/* Use separate Typography components to avoid nested <p> tags */}
                    <Typography variant="body2" component="span" sx={{ display: 'block', color: 'text.secondary' }}>
                        Temperature = {info.temp}&deg;C
                    </Typography>
                    <Typography variant="body2" component="span" sx={{ display: 'block', color: 'text.secondary' }}>
                        Humidity = {info.humidity}%
                    </Typography>
                    <Typography variant="body2" component="span" sx={{ display: 'block', color: 'text.secondary' }}>
                        Min Temp = {info.tempMin}&deg;C
                    </Typography>
                    <Typography variant="body2" component="span" sx={{ display: 'block', color: 'text.secondary' }}>
                        Max Temp = {info.tempMax}&deg;C
                    </Typography>
                    <Typography variant="body2" component="span" sx={{ display: 'block', color: 'text.secondary' }}>
                        The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
