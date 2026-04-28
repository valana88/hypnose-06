import { testimonials } from '@/data/testimonials';
import {
  Author,
  Card,
  Context,
  Grid,
  Name,
  Quote,
} from './Testimonials.styles';

export function Testimonials() {
  return (
    <Grid>
      {testimonials.map((t, i) => (
        <Card key={i}>
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
