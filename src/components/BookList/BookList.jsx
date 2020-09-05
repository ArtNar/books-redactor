import React                from 'react'
import PropTypes            from 'prop-types'
import { ActionsPanel }     from 'components/ActionsPanel'
import { LoadingState }     from 'components/LoadingState'
import { List }             from 'components/List'
import { ListItem }         from 'components/ListItem'
import { ListItemCell }     from 'components/ListItemCell'
import columns              from './columns'

const getActions = ({ onEdit, onDelete }) => [
    {
        key: 'edit',
        label: 'Изменить',
        onClick: onEdit,
    },
    {
        key: 'delete',
        label: 'Удалить',
        onClick: onDelete,
    },
]

const BookList = ({
    list = [],
    loading,
    emptyMessage = 'Список пуст...',
    onEdit,
    onDelete,
}) => {
    const handleEdit = (id) => () => onEdit && onEdit(id)

    const handleDelete = (id) => () => onDelete && onDelete(id)

    const columnsWithControls = [
        ...columns,
        {
            key: 'edit',
            render: ({ id }) => (
                <ActionsPanel
                    actions={getActions({
                        onEdit: handleEdit(id),
                        onDelete: handleDelete(id),
                    })}
                />
            ),
        },
    ]

    return (
        <LoadingState loading={loading}>
            {list.length
                ? (
                    <List>
                        {list.map((item) => (
                            <ListItem
                                key={item.id}
                            >
                                {columnsWithControls.map(({ key, render, label }) => (
                                    <ListItemCell
                                        key={key}
                                        label={label}
                                    >
                                        {render(item)}
                                    </ListItemCell>
                                ))}
                            </ListItem>
                        ))}
                    </List>
                )
                : emptyMessage}
        </LoadingState>
    )
}

BookList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({}),
    ),
    loading: PropTypes.bool,
    emptyMessage: PropTypes.string,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
}

export default BookList
