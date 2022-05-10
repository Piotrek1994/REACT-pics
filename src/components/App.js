import React from 'react'
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component {
	state = { images: [] };


	async onSearchSubmit(term) {
	const response = await axios.get('https://api.unsplash.com/search/photos', {
			params: { query: term },
			headers: {
				Authorization: 'Client-ID rklhgBWLx8fd7VxTDJ33m4czWn_az3Gcey8Zb2GA7I8'
			}
		})

		this.setState({imges: response.data.result})
	}

	render() {
		return (
			<div className='ui container' style={{ marginTop: '20px' }}>
				<SearchBar onSubmit={this.onSearchSubmit}/>
				Found: {this.state.images.length} images
			</div>
		)
	}
}

export default App
