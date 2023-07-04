// // // // // // // // // var i = 0;
// // // // // // // // // var isSuccess = false;

// // // // // // // // // do { 
// // // // // // // // //     i++;

// // // // // // // // //     document.getElementById("demo").innerHTML = "nap the lan" + i;
// // // // // // // // //     console.log("nap the lan " + i)
// // // // // // // // //     if (false) {
// // // // // // // // //         isSuccess = true;
// // // // // // // // //     }
// // // // // // // // // } while (!isSuccess && i<3)
    
// // // // // // // // // var i = 0;
// // // // // // // // // while (i <100) {
// // // // // // // // //     i++;
// // // // // // // // //     if (i%2 !==0) {
// // // // // // // // //         continue;
// // // // // // // // //     }
// // // // // // // // //     if (i >50 ) {
// // // // // // // // //         break;
// // // // // // // // //     }
// // // // // // // // //     console.log(i)
// // // // // // // // // }

// // // // // // // // // var myArray = [
// // // // // // // // //     [1,2],
// // // // // // // // //     [3,4],
// // // // // // // // //     [5,6]
// // // // // // // // // ];

// // // // // // // // // for (var i = 0; i < myArray.length; i++) {
// // // // // // // // //     for (var j = 0; j <myArray[i].length; j++) {
// // // // // // // // //         console.log(myArray[i][j])
// // // // // // // // //     }
// // // // // // // // // }

// // // // // // // // // for (var i = 100; i>0;) {
// // // // // // // // //     i-=5;
// // // // // // // // //     console.log(i)
// // // // // // // // // }
// // // // // // // // // Tinh giai thua
// // // // // // // // // var t = 1;
// // // // // // // // // function giaiThua(num) {
// // // // // // // // //     if (num > 0) {
// // // // // // // // //         t = t * num;
// // // // // // // // //         giaiThua(num-1);
// // // // // // // // //     }
// // // // // // // // //     return num;
// // // // // // // // // }
// // // // // // // // // giaiThua(6);
// // // // // // // // // console.log(t)

// // // // // // // // var getNumber = [
// // // // // // // //     {
// // // // // // // //         ten: "long",
// // // // // // // //         so: 08585997109
// // // // // // // //     }
    

// // // // // // // // ]

// // // // // // // // var a = getNumber.find(function(b, index) {
// // // // // // // //     return b.ten === "0858"
// // // // // // // // })
// // // // // // // // console.log(a)

// // // // // // // // var depthArray = [1,2,[3,4],5,6,[7,8]]

// // // // // // // // var flatArray = depthArray.reduce(function(accumulator, arrayitems) {
// // // // // // // //     return accumulator.concat(arrayitems)
// // // // // // // // }, [])
// // // // // // // // console.log(flatArray)
// // // // // // // Array.prototype.reduce2 = function (cb, results) {
// // // // // // //     var i = 0;
// // // // // // //     if (arguments.length < 2) {
// // // // // // //         i = 1;
// // // // // // //         results = this[0];
// // // // // // //     }
// // // // // // //     for (; i < this.length; i++) {
// // // // // // //        var results =  cb(results, this[i], i, this)
// // // // // // //     }
// // // // // // //     return results;
// // // // // // // }
// // // // // // // function arrToObj(arr) {
// // // // // // //     var results = arr.reduce2(function(obj, item){
// // // // // // //         obj[item[0]] = item[1];
// // // // // // //         return obj;
// // // // // // //     }, {})
// // // // // // //     return results
// // // // // // // }
 
// // // // // // // // Expected results:
// // // // // // // var arr = [
// // // // // // //     ['name', 'Sơn Đặng'],
// // // // // // //     ['age', 18],
// // // // // // // ];
// // // // // // // console.log(arrToObj(arr));


// // // // // // var courses = [
// // // // // //     'javascript',
// // // // // //     'php',
// // // // // //     'ruby'
// // // // // // ]

// // // // // // Array.prototype.forEach2 = function(cb) {
// // // // // //     for (var index in this) {
// // // // // //         if ( this.hasOwnProperty(index))  {
            
// // // // // //         }
// // // // // //         cb(this[index])
// // // // // //     }
// // // // // // }
// // // // // // courses.forEach2(function(course) {
// // // // // //     console.log(course)
// // // // // // })

// // // // // var courses = [
// // // // //     {
// // // // //         name: 'javascript',
// // // // //         coin: 600
// // // // //     },
// // // // //     {
// // // // //         name: 'ruby',
// // // // //         coin: 500
// // // // //     },
// // // // //     {
// // // // //         name: 'php',
// // // // //         coin: 600
// // // // //     }

// // // // // ]
// // // // // Array.prototype.some2 = function (cb) {
// // // // //     for (var index in this) {
// // // // //         if (this.hasOwnProperty(index)) {
// // // // //            if (cb(this[index], index, this)) {
// // // // //             return true;
// // // // //            } else {return false}

// // // // //         }

// // // // //     }
// // // // //     return result;
// // // // // }
// // // // // var coursesSome = courses.some2(function(course) {
// // // // //     return course.coin === 400;
// // // // // })
// // // // // console.log(coursesSome)
// // // // var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

// // // // function render(courses) {
// // // //      var a = courses.map(function(course) {
// // // //         return `<li>${course}</li>`

// // // //     })
// // // //     var b = a.join("")
// // // //     return document.querySelector('ul').innerHTML = b;
    
// // // // }

// // // // render(courses)
// // // // document.querySelector('h1').draggable = "true"
// // // // co
// // // // var a = document.querySelector('button').style;
// // // // function getClick() {
// // // //     if (a.backgroundColor == 'blue') {
// // // //         return a.backgroundColor = 'red'
// // // //     } else return a.backgroundColor = 'blue'
// // // // }
// // // // function getToggle() {
// // // //     document.querySelector('button').classList.toggle('dot')
// // // // }
// // // // var a = document.getElementsByTagName('div');
// // // // for (var i = 0; i< a.length; i++) {
// // // //     a[i].classList.add('box')
// // // // }
// // // // console.log(a[i])

// // // // function display_result(sum) {
// // // // 	console.log('sum is ' + sum);
// // // // }
// // // // function add_two_numbers(callback, a, b) {
// // // // 	var sum = a + b;
// // // // 	callback(sum);
// // // // }

// // // // function run() {
// // // // 	var a = 5;
// // // // 	var b = 7;
// // // // 	add_two_numbers(display_result,a,b);
// // // // }

// // // function run(a, b, c, d){
// // // 	var sorted_str = max, nth1, nth2, min;
		
// // // 	var max = a;
// // // 	if (b>max) {
// // // 		max = b;
// // // 		if (c > max) {
// // // 			max = c;
// // // 			if ( d> max) {
// // // 				max = d
// // // 			}
// // // 		}
// // // 		}
// // // 	var min = a;
// // // 	if (b<min) {
// // // 		min = b;
// // // 		if (c<min) {
// // // 			min = c;
// // // 			if (d<min) {
// // // 				min = d
// // // 			}
// // // 		}
// // // 	}
// // // 	var nth1 = a;
// // // 	if (b>nth1 && b<=max) {
// // // 		nth1 = b;
// // // 		if (c > nth1 && c <max) {
// // // 			nth1 = c;
// // // 			if (d>nth1 && d<max) {
// // // 				nth1 = d;
// // // 			}
// // // 		}
// // // 	}
// // // 	var nth2 = a;
// // // 	if (b<nth2 && b>min) {
// // // 		nth2 = b;
// // // 		if (c<nth2 && c>min) {
// // // 			nth2 = c;
// // // 			if (d<nth2 && d>min) {
// // // 				nth2 = d
// // // 			}
// // // 		}
// // // 	}
// // // 	console.log(max, nth1, nth2, min);
// // // }
// // // run(1,2,3,4)


// // function run(n){
// // 	var output = "";
// // 	for ( var i = 1; i<= n; i++) {

// // 	while(i%2 == 0) {
// // 		output = i;
// // 	}}

// // 	console.log(ouput);
// // }
// // run(5)

// var data = [1,2,3];

// function run(data) {
//     var result = 'No'
// 	data.some(function(dat) {
// 		if (dat%2 == 0) {
// 			result = 'Yes';
// 		}
//     })
// 	return console.log(result);
    
// }
// run([1,2,3])

// function run(n){
// 	var tongSoLAn = 0;
// 	do {
// 		if (n%2 ==0 ) {
// 			n = n/2;
// 			tongSoLAn++;
// 		}
// 	} while (n%2 == 0)
	
// 	console.log(tongSoLAn);
// }
// run(8)





// 	function start() {
// 		getCourses(renderCourse)
// 		handleGetCourses()


// 	}
// 	start()
// 	function getCourses(callback) {
// 		var courseApi = 'http://localhost:3000/courses'
// 		fetch(courseApi)
// 	.then(function(response) {
// 		return response.json()
// 	})
// 	.then(callback) 
// 	}
// 	function renderCourse(courses) {
// 		var html = courses.map(function(course) {
// 			return `
// 				<li>
// 				<h4>${course.name}</h4>
// 				<p>${course.description}</p>
// 				<button id= "delete" onclick = "handleDeleteCourse(${course.id})">Xoa</button>
// 				</li>
// 			`
// 		})
// 		document.querySelector('#demo').innerHTML = html.join('')
// 	}
// 	// var btn = document.querySelector('#btn');
// 	function handleGetCourses() {
// 		document.querySelector('#btn').onclick = function () {
// 			var name = document.querySelector('#name').value
// 			var desc = document.querySelector('#desc').value
// 			var formData = {
// 				name: name,
// 				description: desc,
// 			}
// 			createCourse(formData, )
// 		}
// 	}
// 	function createCourse(data) {
// 		fetch('http://localhost:3000/courses', {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 			  },
// 			body: JSON.stringify(data)
// 		})
// 		.then(function(response) {
// 			return response.json();
// 		})
// 		.then(function() {
// 			getCourses(renderCourse)
// 		})
// 	}
// function handleDeleteCourse(id) {
// 	var courseApi = 'http://localhost:3000/courses'
// 	fetch(courseApi +'/' +id,
// 	{
// 		method: "DELETE",
// 		headers: {
// 			"Content-Type": "application/json",
			
// 		  }
// 	})
// 	.then(function(response) {
// 		response.json()
// 	})
// 	.then(function () {
// 		getCourses(renderCourse)
// 	})
// }








// function start() {
// 	getCourses(function(courses) {
// 		renderCourses(courses)
// 	})
// 	handleCreateCourse()
// }
// start()
// function getCourses(callback) {
// 	var courseApi = 'http://localhost:3000/courses';
// 	fetch(courseApi)
// 	 .then(function(response) {
// 		return response.json()
// 	 })
// 	 .then(callback)
// }
// function renderCourses(courses) {
// 	var courseBlocks = document.querySelector('#demo');
// 	var html = courses.map(function(course) {
// 		return `
// 			<li>
// 			<h4>${course.name}</h4>
// 			<p>${course.description}</p>
// 			<button onclick= "handleDeleteCourse(${course.id})">XOA</button>
// 			</li>
// 		`
// 	})
// 	courseBlocks.innerHTML = html.join('')

// }
// function handleCreateCourse() {
// 	var btn = document.querySelector('#btn');
// 	btn.onclick = function() {
// 		var name = document.querySelector('input[name="name"]').value;
// 		var desc = document.querySelector('input[name="desc"]').value;
// 		var formData = {
// 			name: name,
// 			description: desc
// 		}
// 		createCourse(formData)
// 	}
// }
// function createCourse(data) {
// 	var courseApi = 'http://localhost:3000/courses';
// 	fetch(courseApi, {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 			// 'Content-Type': 'application/x-www-form-urlencoded',
// 		  },
// 		body: JSON.stringify(data)
// 	})
// 	.then(function(response) {
// 		response.json()
// 	})
// 	.then(function(cours) {
// 		getCourses(function(cours) {
// 			renderCourses(cours)
// 		})
// 	})
// }
// function handleDeleteCourse(id) {
// 	var courseApi = 'http://localhost:3000/courses';
// 	fetch(courseApi +'/' + id, {
// 		method: "DELETE",
// 		headers: {
// 			"Content-Type": "application/json",
// 			// 'Content-Type': 'application/x-www-form-urlencoded',
// 		  },
// 	})
// 	.then(function(response) {
// 		response.json()
// 	})
// 	.then(function() {
// 		getCourses(function(courses) {
// 			renderCourses(courses)
// 		})
// 	})
// }



// var users = [
// 	{
// 		id: 1,
// 		name: 'Thanh Long'
// 	},
// 	{
// 		id: 2,
// 		name: 'Son Dang'
// 	},
// 	{
// 		id: 3,
// 		name: 'Hai Dang'
// 	}

// ]
// var comments = [
// 	{
// 		id: 1,
// 		user_id: 1,
// 		content: 'Nao ra anh oi'
// 	},
// 	{
// 		id: 2,
// 		user_id: 3,
// 		content: 'Nao ra anh oi'
// 	},
// 	{
// 		id: 3,
// 		user_id: 3,
// 		content: 'Nao ra anh oi'
// 	}
// ]
// function getComments(comments) {
// 	return new Promise(function(resolve) {
// 		setTimeout(function() {
// 			resolve(comments)
// 		}, 1000)
// 	})
// }
// function getUsers(userIds) {
// 	return new Promise(function(resolve) {
// 		var result = users.filter(function(user) {
// 			return userIds.includes(user.id)
// 		})
// 		setTimeout(function() {
// 			resolve(result)
// 		}, 1000)
// 	})
// }
// getComments(comments) 
// .then(function(comments) {
// 	var userIds = comments.map(function(comment) {
// 		return comment.user_id
// 	})
// 	return getUsers(userIds)
// 	.then(function(result) {
// 		return {
// 			user: result,
// 			comment: comments
// 		}
// 	})
// })
// .then(function(data) {
// 	var html = '';
// 	var commentBlock = document.querySelector('#demo2');
// 	data.comment.map(function(comment) {
// 		var user = data.user.find(function(user) {
// 				return user.id == comment.user_id
// 		})
// 		html += `${user.name}: ${comment.content} </br>`  
// 	})
// 	commentBlock.innerHTML = html ;
// })

	
// getUsers([1,2]) 
// .then(function(result) {
    // 	console.log()
    // })

// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const tabs = $$(".tab-item");
// const panes = $$(".tab-pane");


// const tabActive = $(".tab-item.active");
// const line = $(".line");

// // SonDN fixed - Active size wrong size on first load.
// // Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340
// requestIdleCallback(function () {
//   line.style.left = tabActive.offsetLeft + "px";
//   line.style.width = tabActive.offsetWidth + "px";
// });

// tabs.forEach((tab, index) => {
//   const pane = panes[index];

//   tab.onclick = function () {
//     $(".tab-item.active").classList.remove("active");
// 		$(".tab-pane.active").classList.remove("active");
// 		console.log([this])

//     line.style.left = this.offsetLeft + "px";
//     line.style.width = this.offsetWidth + "px";

//     this.classList.add("active")
// 		pane.classList.add("active")
//   };
// });

const $ = document.querySelector.bind(document);
const playBtn = $('.play')
const nameSong = $('.name-song');
const cd = $('.cd');
const audio = $('#audio')
const progress = $('.slider')
const nextBtn = $('.next')
const prevBtn = $('.prev')
const randomBtn = $('.shuffle')
const repeatBtn = $('.repeat')
const playList = $('.main')

const app = {
    currenIndex: 0,
    isRepeat: false,
    isPlaying: false,
    israndom: false,
    songs: [
        {
            id: 1,
            name: '100 Years Love',
            song: 'years.mp3',
            image: 'https://i1.sndcdn.com/artworks-4VN4srK9aaTVEOlz-97l08A-t500x500.jpg'
        },
        {
            id: 1,
            name: 'Forget',
            song: 'forget.mp3',
            image: 'forget.jfif'
        },
        {
            id: 1,
            name: 'Set Fire to the Rain',
            song: 'setfire.mp3',
            image: 'setfire.png'
        },
        {
            id: 1,
            name: 'Nhìn kìa trời tối rồi',
            song: 'nhinhkiatroitoiroi.mp3',
            image: 'nhinkiatroitoiroi.jfif'
        },
        {
            id: 1,
            name: 'Nothin on me',
            song: 'nothinonme.mp3',
            image: 'nothinonme.jpg'
        },
        {
            id: 1,
            name: 'Trance',
            song: 'trance.mp3',
            image: 'trance.jfif'
        },
        {
            id: 1,
            name: 'Vành khuyên Remix',
            song: 'vanhkhuyen.mp3',
            image: 'vanhkhuyen.jfif'
        },
        {
            id: 2,
            name: 'Rhymastic Yêu 5',
            song: 'Yeu-5-Remix-Tiktok-Rhymastic.mp3',
            image: 'data:image/jpeg;base64,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'

        },
        {
            id: 3,
            name: 'Nevada',
            song: 'Mashup-Di-Di-Di-x-NEVADA-Remix-Tiktok.mp3',
            image: 'https://i1.sndcdn.com/artworks-5Z483EjS9Xn4-0-t240x240.jpg'

        },
        {
            id: 4,
            name: 'Tây Du Ký',
            song: 'Tay-Du-Ki-Le-Bao-Remix.mp3',
            image: 'data:image/jpeg;base64,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'
            
        },
    
    ],
    defineProperty: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currenIndex]
            }
        })
    },
    loadNextSong: function() {
        app.currenIndex++;
        console.log(app.currenIndex,app.songs.length)
        if(app.currenIndex >= app.songs.length) {
            app.currenIndex = 0;
            app.currenIndex--
        } else app.loadCurrentSong()
    },
    loadPrevSong: function() {
        if(app.currenIndex <= 0) {
            app.currenIndex = app.songs.length
        } else if (app.currenIndex <= app.songs.length) {
            app.currenIndex--;
        }
        app.loadCurrentSong()
    },
    loadRandomSong: function() {
        var newIndex;
        do {
            newIndex = Math.floor(Math.random() * app.songs.length)
        } while (newIndex === app.currenIndex)
        app.currenIndex = newIndex;
        app.loadCurrentSong()
    },


    handleEvents: function() {
        // const _this = this;D
        document.onscroll = function() {
            var scrollTop = window.scrollY || document.documentElement.scrollTop
            
        }
        playBtn.onclick = function() {
            if (app.isPlaying) {
                $('.fa-pause').classList.remove('fa-pause');
                $('.playicon').classList.add('fa-play');
                
                audio.pause();
            } else {
                audio.play();
                $('.fa-play').classList.remove('fa-play');
                $('.playicon').classList.add('fa-pause');
                
            }

                
                
        }
        audio.onplay = function() {
            app.isPlaying = true;
        }
        audio.onpause = function() {
            app.isPlaying = false;
        }
        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration *100)
                console.log(progressPercent)
                progress.value = progressPercent;
            }
        }
        progress.onchange = function(e) {
            const seekTime =  audio.duration /100 * e.target.value
            audio.currentTime = seekTime
        }
        nextBtn.onclick = function() {
            if (app.israndom) {
                app.loadRandomSong()
            } else {app.loadNextSong()}
            
            audio.play()
            app.render()
        }
        prevBtn.onclick = function() {
            if(app.israndom) {
                app.loadRandomSong()
            } else {
                app.loadPrevSong();
            }
            
            audio.play()
            app.render()
        }
        randomBtn.onclick = function() {
            app.israndom = !app.israndom
            $('.shuffleicon').classList.toggle('active');
        }
        // xu ly nextsong khi end
        audio.onended = function() {
            if (app.isRepeat) {
                audio.play()
            } else {
                nextBtn.click()
            }
        }
        // Repeat
        repeatBtn.onclick = function() {
            app.isRepeat = !app.isRepeat
            $('.repeaticon').classList.toggle('active');
        }
        //lang nghe click vao PlayList
        playList.onclick = function(e) {
            const songNode = e.target.closest('.song:not(.active)') 
            if(songNode || e.target.closest('.bar'))
            { 
                console.log(songNode)
                if (songNode) {
                    app.currenIndex = Number(songNode.dataset.index);
                    app.loadCurrentSong()
                    app.render()
                    app.isPlaying = false;
                    playBtn.click()
                    
                }
                // xy ly clixk vao song option
            }
        }
    },

    loadCurrentSong: function() {
        $('title').textContent =   `Free Music - ${this.currentSong.name}`
        nameSong.textContent = this.currentSong.name
        cd.style.backgroundImage = `url(${this.currentSong.image})`
        audio.src= this.currentSong.song
    },
    
    render: function () {
        
        const htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${index == app.currenIndex ? 'active' : ''}" data-index="${index}">
                    <div class="name-songs">${song.name}</div>
                    <div class="song-image" style= "background: url(${song.image}); background-size: cover;"></div>
                    <div class="bar"><i class="fa-solid fa-ellipsis bar-icon"></i></div>
                    </div>
                    `
        })
        $(".main").innerHTML = htmls.join('');
    },
    start: function() {
        this.defineProperty()
        this.handleEvents()
        this.loadCurrentSong()
        this.render()
    }
}
app.start()
