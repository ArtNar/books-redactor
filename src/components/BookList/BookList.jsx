import React                from 'react'
import PropTypes            from 'prop-types'
import { LoadingState }     from 'components/LoadingState'
import { List }             from 'components/List'
import { ListItem }         from 'components/ListItem'
import { Paper }            from 'components/Paper'

const BookList = ({
    list = [],
    loading,
    emptyMessage = 'Список пуст...',
}) => (
    <Paper>
        <LoadingState loading={loading}>
            {list.length
                ? (
                    <List>
                        {list.map(({ id, name }) => (
                            <ListItem
                                key={id}
                            >
                                {name}
                            </ListItem>
                        ))}
                    </List>
                )
                : emptyMessage}
        </LoadingState>
    </Paper>
)

BookList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({}),
    ),
    loading: PropTypes.bool,
    emptyMessage: PropTypes.string,
}

export default BookList