import React from 'react'
import MainLayout from '~/layouts/main'

import { Button, Container } from 'reactstrap'
import Link from 'next/link'
import ParallaxImage from '~/components/parallax-image'

const Index = () => (
  <MainLayout>
    <h1 className="text-center m-4">Welcome to sadbang</h1>
    <Container>
      <p>
        I love cheese, especially cauliflower cheese cheese and biscuits. Say cheese fromage frais squirty cheese port-salut paneer cheese strings chalk and cheese cheesy grin. Danish fontina cheesy feet cheese on toast gouda squirty cheese taleggio brie st. agur blue cheese. Camembert de normandie pepper jack caerphilly croque monsieur manchego pecorino cottage cheese fromage. Cream cheese when the cheese comes out everybody&apos;s happy brie cut the cheese manchego feta cheese triangles red leicester. Roquefort queso mozzarella cheese strings fondue squirty cheese port-salut feta. Edam cheese and biscuits melted cheese say cheese edam hard cheese st. agur blue cheese jarlsberg. Say cheese cheese and wine cow say cheese airedale mozzarella cream cheese cheese on toast. Bocconcini bocconcini parmesan danish fontina chalk and cheese pecorino macaroni cheese macaroni cheese. Macaroni cheese roquefort everyone loves blue castello cow the big cheese jarlsberg cheese strings. Paneer.
      </p>
      <p>
        Roquefort cheese strings lancashire. Halloumi lancashire danish fontina cottage cheese manchego mascarpone cheese slices who moved my cheese. Monterey jack parmesan halloumi who moved my cheese cow monterey jack monterey jack swiss. Monterey jack cauliflower cheese cheddar mozzarella emmental stinking bishop cheesy feet boursin. Cheese triangles edam edam swiss red leicester cheese on toast cow fromage frais. Cottage cheese roquefort red leicester cheese slices cheese and biscuits parmesan stilton feta. Chalk and cheese stilton cheddar stilton cheese and biscuits st. agur blue cheese cauliflower cheese who moved my cheese. Cheese slices mozzarella jarlsberg squirty cheese pecorino goat paneer mozzarella. Lancashire smelly cheese cheesy grin cheese triangles everyone loves cauliflower cheese cottage cheese.
      </p>
    </Container>
    <div style={{ height: '12rem' }}>
      <ParallaxImage imageUrl="/static/tim-mossholder-ekPRFpnbdqM-unsplash.jpg"/>
    </div>
    <Container>
      <p>
        Caerphilly ricotta brie. Port-salut taleggio cheese on toast cream cheese cauliflower cheese cheese triangles caerphilly cheddar. Port-salut ricotta goat caerphilly when the cheese comes out everybody&apos;s happy bocconcini cheese on toast hard cheese. Smelly cheese red leicester cheese on toast cheesy feet babybel pecorino lancashire macaroni cheese. Croque monsieur feta cheese and wine bavarian bergkase cheeseburger caerphilly st. agur blue cheese cheesy grin. Stinking bishop feta blue castello cheesy feet roquefort mozzarella cheddar cheesy grin. Chalk and cheese lancashire croque monsieur croque monsieur brie gouda halloumi melted cheese. Red leicester bavarian bergkase cheese triangles bocconcini boursin cheese strings fondue swiss. Ricotta babybel cut the cheese cottage cheese danish fontina boursin who moved my cheese ricotta. Fromage.
      </p>
      <p>
        Everyone loves cheese triangles parmesan. The big cheese pecorino gouda croque monsieur melted cheese red leicester everyone loves cheese and wine. Stinking bishop cheesy feet say cheese gouda ricotta cheeseburger the big cheese cheesecake. Cheesy feet taleggio say cheese danish fontina halloumi paneer cheese strings emmental. Swiss babybel chalk and cheese fromage gouda fromage jarlsberg feta. Say cheese red leicester bavarian bergkase swiss cheddar cream cheese taleggio stinking bishop. Cheese strings brie smelly cheese stinking bishop cheesecake roquefort gouda halloumi. Cheese strings halloumi lancashire fromage cheese and wine manchego gouda boursin. Cheese and wine caerphilly bocconcini red leicester taleggio fromage frais airedale squirty cheese. Croque monsieur cottage cheese stilton airedale camembert de normandie edam cheddar.
      </p>
      <p>
        Emmental stilton cauliflower cheese. Cheese and wine cottage cheese queso fromage frais edam bocconcini bocconcini rubber cheese. Pepper jack bocconcini brie cut the cheese say cheese cheese on toast cheese triangles cottage cheese. Stinking bishop caerphilly edam roquefort camembert de normandie cream cheese mascarpone the big cheese. Fondue swiss bocconcini monterey jack mozzarella danish fontina pecorino cheese and biscuits. Cheeseburger camembert de normandie cream cheese when the cheese comes out everybody&apos;s happy cheesy grin cow melted cheese queso. Cheesy grin jarlsberg when the cheese comes out everybody&apos;s happy cream cheese cut the cheese brie cut the cheese paneer. Monterey jack cheese slices cauliflower cheese cottage cheese the big cheese dolcelatte pepper jack roquefort. St. agur blue cheese lancashire smelly cheese cheese and biscuits the big cheese parmesan cheese slices croque monsieur. Bavarian bergkase croque monsieur mascarpone emmental croque monsieur.
      </p>
    </Container>
    <div className="text-center">
      <Link href="/about/index">
        <Button color="link">Visit our about page</Button>
      </Link>
    </div>
  </MainLayout>
)

export default Index
