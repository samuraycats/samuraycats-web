import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Rendimiento adaptable',
    description:
      'Nuestros productos se ajusta fácilmente a tus necesidades, aumentando la eficiencia y simplificando tus tareas.',
  },
  {
    icon: <ConstructionRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Diseñado para durar',
    description:
      'Disfruta de una durabilidad inigualable que supera las expectativas y garantiza una inversión a largo plazo.',
  },
  {
    icon: <ThumbUpAltRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Excelente experiencia de usuario',
    description:
      'Integra nuestro producto en tu rutina con una interfaz intuitiva y fácil de usar.',
  },
  {
    icon: <AutoFixHighRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Funcionalidad innovadora',
    description:
      'Mantente a la vanguardia con características que establecen nuevos estándares y responden mejor que nadie a tus necesidades cambiantes.',
  },
];

export default function Content() {
  return (
    <Stack
      sx={{ flexDirection: 'column', alignSelf: 'center', gap: 4, maxWidth: 450 }}
    >

      {items.map((item, index) => (
        <Stack key={index} direction="row" sx={{ gap: 2 }}>
          {item.icon}
          <div>
            <Typography gutterBottom sx={{ fontWeight: 'medium', textAlign:"justify"}}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', textAlign:"justify" }}>
              {item.description}
            </Typography>
          </div>
        </Stack>
      ))}
    </Stack>
  );
}