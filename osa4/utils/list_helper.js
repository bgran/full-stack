const dummy = (blogs) => {
	var kala = blogs
	return (1)
}

const totalLikes = (blogs) => {
	var likes = 0

	for (var i=0; i<blogs.length; i++) {
		console.log("obj.likes", blogs[i].likes)
		likes += blogs[i].likes
	}
	console.log("totalLikse", likes)
	return (likes)
}

module.exports = {
	dummy, totalLikes
}

