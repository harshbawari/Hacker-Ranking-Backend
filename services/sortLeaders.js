function sort_leaders(hackers) {
    
    hackers.sort((a, b) => {
        const name_a = a.name.toUpperCase();
        const name_b = b.name.toUpperCase();
        const percentile_a = (a.competitivePercentile.dataStructures + a.competitivePercentile.algorithms + a.competitivePercentile.cpp + a.competitivePercentile.java + a.competitivePercentile.python + a.competitivePercentile.html + a.competitivePercentile.javascript) / 7;
        const percentile_b = (b.competitivePercentile.dataStructures + b.competitivePercentile.algorithms + b.competitivePercentile.cpp + b.competitivePercentile.java + b.competitivePercentile.python + b.competitivePercentile.html + b.competitivePercentile.javascript) / 7;

        if(percentile_a > percentile_b) {
            return -1;
        }
        if(percentile_a < percentile_b) {
            return 1;
        }

        return 0;
    });

    console.log('hackers: ', hackers);

    return hackers.slice(0, 3);
}

exports.sort_leaders = sort_leaders;