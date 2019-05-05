const apiBaseUrl = "http://localhost:3000";

// base calls on whiteboard planning -- see notebook for May 2

const getAllChix = () => {
    return fetch(`${apiBaseUrl}/chicken`)
        .then(response => response.json())
        .then(parsedResult => {
            // console.log("all the chix", parsedResult);
            return parsedResult;
        })
}

const getOneChix = (chickenId) => {
    fetch(`${apiBaseUrl}/chicken/${chickenId}`)
        .then(response => response.json())
        .then(parsedResult => {
            console.log("one chix", parsedResult);
        })
}

// getAllChickens();
// testing
// getOneChix(1);
// testing. NOTE in () just pass in any Id #
// getOneChix(3);
// testing

const updateChix = (chickenId, chixObj) => {
    // remember to build chixObj
    fetch(`${apiBaseUrl}/chicken/${chickenId}`,
        {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
                // dont freak this shit's on MDN to look up
            },
            body: JSON.stringify(chixObj)
        }
    )
        .then(response => response.json())
        .then(parsedResult => {
            console.log("update chix", parsedResult);
        })
}

const makeChix = (chixObj) => {
    fetch(`${apiBaseUrl}/chicken/`,
        {
            method: "POST",
            headers: {
                "content-type": "application/json"
                // dont freak this shit's on MDN to look up
            },
            body: JSON.stringify(chixObj)
        }
    )
        .then(response => response.json())
        .then(parsedResult => {
            console.log("update chix", parsedResult);
        })

}


// const newChixObj = {
//     name: "Feather Flocklear",
//     color: "purple",
//     gender: "female",
//     'spicelevel': "2"
// }


const deleteChix = (chickenId) => {
    fetch(`${apiBaseUrl}/chicken/${chickenId}`,
        {
            method: "DELETE",
        }
    )
        .then(response => response.json())
        .then(parsedResult => {
            console.log("deleted chix", parsedResult);
        })
}

// deleteChix(1);
// this looks weird in console what's up with that?

// makeChix(newChixObj);

const testChixObj = {
    name: "Joe Thighsman",
    color: "red",
    gender: "male",
    'spicelevel': "3"
}
// this will change your DATABASE

// updateChix(1, testChixObj);
// testing