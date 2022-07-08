import crab from '../assets/crab.svg'
import octopus from '../assets/octopus.svg'
import whale from '../assets/whale.svg'
import dove from '../assets/dove.svg'
import question from '../assets/question.svg'

const getSrcImages = (nameImg: string): string => {
  switch (nameImg) {
    case 'crab':
      return crab

    case 'octopus': {
      return octopus
    }

    case 'whale': {
      return whale
    }

    case 'dove': {
      return dove
    }

    case 'question': {
      return question
    }

    default:
      return 'question'
  }
}

export default getSrcImages
