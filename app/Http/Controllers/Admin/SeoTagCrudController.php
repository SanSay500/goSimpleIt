<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\SeoTagRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class SeoTagCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class SeoTagCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\ShowOperation;

    /**
     * Configure the CrudPanel object. Apply settings to all operations.
     *
     * @return void
     */
    public function setup()
    {
        CRUD::setModel(\App\Models\SeoTag::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/seo-tag');
        CRUD::setEntityNameStrings('seo tag', 'seo tags');
    }

    /**
     * Define what happens when the List operation is loaded.
     *
     * @see  https://backpackforlaravel.com/docs/crud-operation-list-entries
     * @return void
     */
    protected function setupListOperation()
    {
        CRUD::column('url');
        CRUD::column('title');
        CRUD::column('description');
        CRUD::column('lang');
        CRUD::column('ogDescription');
        CRUD::column('ogImage');
        CRUD::column('ogLocale');
        CRUD::column('ogLocaleAlternate');
        CRUD::column('ogSiteName');
        CRUD::column('ogTitle');
        CRUD::column('ogType');
        CRUD::column('ogTypeObject');
        CRUD::column('ogUrl');
        CRUD::column('ogVideo');
        CRUD::column('twitterSummaryCardDescription');
        CRUD::column('twitterSummaryCardImage');
        CRUD::column('twitterSummaryCardImageAlt');
        CRUD::column('twitterSummaryCardSiteUsername');
        CRUD::column('twitterSummaryCardTitle');

        /**
         * Columns can be defined using the fluent syntax or array syntax:
         * - CRUD::column('price')->type('number');
         * - CRUD::addColumn(['name' => 'price', 'type' => 'number']);
         */
    }

    /**
     * Define what happens when the Create operation is loaded.
     *
     * @see https://backpackforlaravel.com/docs/crud-operation-create
     * @return void
     */
    protected function setupCreateOperation()
    {
        CRUD::setValidation(SeoTagRequest::class);

        CRUD::field('url');
        CRUD::field('title');
        CRUD::field('description');
        CRUD::field('lang');
        CRUD::field('ogDescription');
        CRUD::field('ogImage');
        CRUD::field('ogLocale');
        CRUD::field('ogLocaleAlternate');
        CRUD::field('ogSiteName');
        CRUD::field('ogTitle');
        CRUD::field('ogType');
        CRUD::field('ogTypeObject');
        CRUD::field('ogUrl');
        CRUD::field('ogVideo');
        CRUD::field('twitterSummaryCardDescription');
        CRUD::field('twitterSummaryCardImage');
        CRUD::field('twitterSummaryCardImageAlt');
        CRUD::field('twitterSummaryCardSiteUsername');
        CRUD::field('twitterSummaryCardTitle');

        /**
         * Fields can be defined using the fluent syntax or array syntax:
         * - CRUD::field('price')->type('number');
         * - CRUD::addField(['name' => 'price', 'type' => 'number']));
         */
    }

    /**
     * Define what happens when the Update operation is loaded.
     *
     * @see https://backpackforlaravel.com/docs/crud-operation-update
     * @return void
     */
    protected function setupUpdateOperation()
    {
        $this->setupCreateOperation();
    }
}
