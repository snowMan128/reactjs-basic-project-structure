/**
 * This hook is a test for some hook that fetch data from server and
 * pass it as dropdown option object
 */

import React, {useState, useEffect} from "react"

/** this method should have separate file
 * it's just for test */
const testServices = {
    getAllTests: () => {
    }
}

function useTestsInit(type = null) {
    const [tests, setTests] = useState([])

    useEffect(() => {

        (async function f() {
            setTests(await getTestsObj('', type))
        })()

    }, [])

    return [tests, setTests]
}

/**
 * handle tests search by trend and return as semantic-ui dropdown options
 *
 * @param trend
 * @param type
 * @returns {Promise<*>}
 */
async function getTestsObj(trend = '', type = null) {

    const params = {
        limit: 10,
        offset: 0,
        trend,
        type,
        status: 'active'
    }

    const testsRes = await testServices.getAllTests(params)

    if (testsRes.data.success)
        return testsRes.data.result.map((item, key) => (
            {
                key,
                text: item.title,
                value: item.id
            }
        ))

    return []

}


export {useTestsInit, getTestsObj}