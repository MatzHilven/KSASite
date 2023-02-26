export default function Activities() {
    const data = [
        {
            leeuwkes: [
                {
                    date: "Zaterdag 4 februari",
                    time: "13u30 - 16u00",
                    activity: "Smakelijk, dag en bedankt!"
                },
                {
                    date: "Zaterdag 11 februari",
                    time: "13u30 - 16u00",
                    activity: "Smakelijk, dag en bedankt!"
                }
            ],
            jongknapen: [
                {
                    date: "Zaterdag 4 februari",
                    time: "13u30 - 16u00",
                    activity: "Smakelijk, dag en bedankt!"
                },
                {
                    date: "Zaterdag 11 februari",
                    time: "13u30 - 16u00",
                    activity: "Smakelijk, dag en bedankt!"
                }
            ],
            knapen: [
                {
                    date: "Zaterdag 4 februari",
                    time: "13u30 - 16u00",
                    activity: "Smakelijk, dag en bedankt!"
                },
                {
                    date: "Zaterdag 11 februari",
                    time: "13u30 - 16u00",
                    activity: "Smakelijk, dag en bedankt!"
                }
            ],
            jonghernieuwers: [
                {
                    date: "Zaterdag 4 februari",
                    time: "13u30 - 16u00",
                    activity: "Smakelijk, dag en bedankt!"
                },
                {
                    date: "Zaterdag 11 februari",
                    time: "13u30 - 16u00",
                    activity: "Smakelijk, dag en bedankt!"
                }
            ],
        }
    ]

    return (
        <table className="table-auto w-full px-5 border-separate border-spacing-y-3 lg:w-9/12">
            <thead>
            <tr>
                <th className="text-lg text-left p-2">Leeuwkes</th>
                <th className="text-lg text-left p-2">Jong-Knapen</th>
                <th className="text-lg text-left p-2">Knapen</th>
                <th className="text-lg text-left p-2">Jong-Hernieuwers</th>
            </tr>
            </thead>
            <tbody>
            {data.map(ban => {

            })}
            </tbody>
        </table>
    )
}