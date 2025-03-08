import React, { Component } from 'react'

class CourseFilters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latestJob: [],

      category: [
        { id: 1, name: 'Art Design', value: 'artdesign', isChecked: false },
        { id: 2, name: 'Business', value: 'business', isChecked: false },
        { id: 3, name: 'Data Science', value: 'datascience', isChecked: false },
        { id: 4, name: 'Development', value: 'development', isChecked: false },
        { id: 5, name: 'Finance', value: 'finance', isChecked: false },
      ],
      instructors: [
        { id: 1, name: 'Kiran Molly', value: 'kiranmolly', isChecked: false },
        { id: 2, name: 'Jackson Alive', value: 'jacksonalive', isChecked: false },
        { id: 3, name: 'Oawe Alve', value: 'oawealve', isChecked: false },
        { id: 4, name: 'Liakon Rivey', value: 'liakonrivey', isChecked: false },
        { id: 5, name: 'Foley Patrik', value: 'foleypatrik', isChecked: false },
      ],
      price: [
        { id: 1, name: 'Free', value: 'free', isChecked: false },
        { id: 2, name: 'Premium', value: 'premium', isChecked: false },
      ],
      language: [
        { id: 1, name: 'China', value: 'china', isChecked: false },
        { id: 2, name: 'English', value: 'english', isChecked: false },
        { id: 3, name: 'French', value: 'french', isChecked: false },
        { id: 4, name: 'German', value: 'german', isChecked: false },
        { id: 5, name: 'Italian', value: 'italian', isChecked: false },
        { id: 6, name: 'Spanish', value: 'spanish', isChecked: false },
      ],
      difficulty: [
        { id: 1, name: 'Beginner', value: 'beginner', isChecked: false },
        { id: 2, name: 'Intermediate', value: 'intermediate', isChecked: false },
        { id: 3, name: 'Expert', value: 'expert', isChecked: false },
      ],
      rating: [
        { id: 1, name: 'one', value: 'one', isChecked: false },
        { id: 2, name: 'Two', value: 'two', isChecked: false },
        { id: 3, name: 'Three', value: 'three', isChecked: false },
        { id: 4, name: 'Four', value: 'four', isChecked: false },
        { id: 5, name: 'Five', value: 'five', isChecked: false },
      ],
    }
  }

  toggleCheck = (type, id) => {
    this.setState((prevState) => ({
      [type]: prevState[type].map((item) => (item.id === id ? { ...item, isChecked: !item.isChecked } : item)),
    }))
  };

  clearToggle = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type].map((item) => ({ ...item, isChecked: false })),
    }))
  };

  render() {
    const {
      category,
      instructors,
      price,
      language,
      difficulty,
      rating,
    } = this.state

    return (
      <div>
        {/* Render your filters here, and utilize toggleCheck and clearToggle functions */}
      </div>
    )
  }
}

export default CourseFilters
