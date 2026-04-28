import { testimonials } from '@/data/testimonials';
import {
  Author,
  Card,
  Context,
  Grid,
  Name,
  Quote,
  Stars,
} from './Testimonials.styles';

export function Testimonials() {
  return (
    <Grid>
      {testimonials.map((t, i) => (
        <Card key={i}>
          <Stars aria-label="Note : 5 étoiles sur 5">
            <span aria-hidden="true">★★★★★</span>
          </Stars>
          <Quote>{t.quote}</Quote>
          <Author>
            <Name>{t.author}</Name>
            {t.context && <Context>{t.context}</Context>}
          </Author>
        </Card>
      ))}
    </Grid>
  );
}
