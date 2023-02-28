export default function Activities() {
    const data = [
        [
            {
                ban: "Leeuwkes",
                date: " Zaterdag 4 februari",
                time: "13u30 - 16u00",
                description: "Smakelijk, dag en bedankt!",
                extra: "",
            },
            {
                ban: "Jong-Knapen",
                date: " Zaterdag 4 februari",
                time: "16u00 - 18u00",
                description: "Smakelijk, dag en bedankt!",
                extra: "",
            },
            {
                ban: "Knapen",
                date: " Zaterdag 4 februari",
                time: "18u00 - 20u00",
                description: "Smakelijk, dag en bedankt!",
                extra: "",
            },
            {
                ban: "Jong-Hernieuwers",
                date: " Zaterdag 4 februari",
                time: "20u00 - 22u00",
                description: "Smakelijk, dag en bedankt!",
                extra: "",
            }
        ],
        [
            {
                ban: "Leeuwkes",
                date: " Zaterdag 4 februari",
                time: "13u30 - 16u00",
                description: "Smakelijk, dag en bedankt!",
                extra: "",
            },
            {
                ban: "Jong-Knapen",
                date: " Zaterdag 4 februari",
                time: "16u00 - 18u00",
                description: "Smakelijk, dag en bedankt!",
                extra: "",
            },
            {
                ban: "Knapen",
                date: " Zaterdag 4 februari",
                time: "18u00 - 20u00",
                description: "Smakelijk, dag en bedankt!",
                extra: "",
            },
            {
                ban: "Jong-Hernieuwers",
                date: " Zaterdag 4 februari",
                time: "20u00 - 22u00",
                description: "Smakelijk, dag en bedankt!",
                extra: "",
            }
        ],
        [
            {
                ban: "Leeuwkes",
                date: " Zaterdag 4 februari",
                time: "13u30 - 16u00",
                description: "Smakelijk, dag en bedankt!",
                extra: "",
            },
            {
                ban: "Jong-Knapen",
                date: " Zaterdag 4 februari",
                time: "16u00 - 18u00",
                description: "Smakelijk, dag en bedankt!",
                extra: "",
            },
            {
                ban: "Knapen",
                date: " Zaterdag 4 februari",
                time: "18u00 - 20u00",
                description: "Smakelijk, dag en bedankt!",
                extra: "",
            },
            {
                ban: "Jong-Hernieuwers",
                date: " Zaterdag 4 februari",
                time: "20u00 - 22u00",
                description: "Smakelijk, dag en bedankt!",
                extra: "",
            }
        ],
        [
            {
                ban: "Leeuwkes",
                date: " Zaterdag 4 februari",
                time: "13u30 - 16u00",
                description: "Smakelijk, dag en bedankt!",
                extra: "",
            },
            {
                ban: "Jong-Knapen",
                date: " Zaterdag 4 februari",
                time: "16u00 - 18u00",
                description: "Smakelijk, dag en bedankt!",
                extra: "",
            },
            {
                ban: "Knapen",
                date: " Zaterdag 4 februari",
                time: "18u00 - 20u00",
                description: "Smakelijk, dag en bedankt!",
                extra: "",
            },
            {
                ban: "Jong-Hernieuwers",
                date: " Zaterdag 4 februari",
                time: "20u00 - 22u00",
                description: "Smakelijk, dag en bedankt!",
                extra: "",
            }
        ],
        [
            {
                ban: "Leeuwkes",
                date: " Zaterdag 4 februari",
                time: "13u30 - 16u00",
                description: "Smakelijk, dag en bedankt!",
                extra: "",
            },
            {
                ban: "Jong-Knapen",
                date: " Zaterdag 4 februari",
                time: "16u00 - 18u00",
                description: "Smakelijk, dag en bedankt!",
                extra: "",
            },
            {
                ban: "Knapen",
                date: " Zaterdag 4 februari",
                time: "18u00 - 20u00",
                description: "Smakelijk, dag en bedankt!",
                extra: "",
            },
            {
                ban: "Jong-Hernieuwers",
                date: " Zaterdag 4 februari",
                time: "20u00 - 22u00",
                description: "Smakelijk, dag en bedankt!",
                extra: "",
            }
        ],
        [
            {
                ban: "Leeuwkes",
                date: " Zaterdag 4 februari",
                time: "13u30 - 16u00",
                description: "Smakelijk, dag en bedankt!",
                extra: "",
            },
            {
                ban: "Jong-Knapen",
                date: " Zaterdag 4 februari",
                time: "16u00 - 18u00",
                description: "Smakelijk, dag en bedankt!",
                extra: "",
            },
            {
                ban: "Knapen",
                date: " Zaterdag 4 februari",
                time: "18u00 - 20u00",
                description: "Smakelijk, dag en bedankt!",
                extra: "",
            },
            {
                ban: "Jong-Hernieuwers",
                date: " Zaterdag 4 februari",
                time: "20u00 - 22u00",
                description: "Smakelijk, dag en bedankt!",
                extra: "",
            }
        ],
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
            {data.map((day, index) => {
                return (
                    <tr className={index % 2 == 0 ? "" : "bg-blue-100"}>
                        {day.map(act => {
                            return (
                                <td>
                                    <div className="p-2">
                                        <p className="text-sm font-bold">{act.date}</p>
                                        <p className="text-sm">{act.time}</p>
                                        <br/>
                                        <p className="text-sm">{act.description}</p>
                                        <p className="text-sm">{act.extra}</p>
                                    </div>
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}