import Posts from './ReactPost'


const QuestionHandler = () => {

    const questions = [
        {
          question: 'Vad är tre fördelar med att använda React?',
          answer:
            '-Det finns många fördelar med React men tre exempel är: 1. React har väldigt snabba renderingstider 2. React är komponentbaserat  3: React är enklare att lära sig än tex Angular och Vue, du kan enkelt lära dig React om du har baskunskaper i HTML, CSS och JavaScript',
        },
        {
          question:
            'Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?',
          answer:
            '-En "vanlig" webbplats laddar om hela sidan när man interagerar med den, tex trycker på en knapp. En single page application däremot laddar endast om innehållet som ändrats och därmed är bland annat renderingstiderna mycket bättre',
        },
        {
          question: 'Nämn tre skillnader mellan React och Angular',
          answer:
            '-1. React är ett mer flexibelt ramverk som med fördel bör användas med andra bibliotek medan Angular kommer med verktyg som är optimerade för varandra 2. Med Angular däremot är det enklare att hålla en renare kod och högre skalbarhet 3. React är mer SEO-vänligt, vilket underlättar med algoritmer för användaren',
        },
      ]

      return(
        <Posts items={questions}></Posts>
      )
 
}

export default QuestionHandler

